import BeamClient from 'beam-client-node';
import BeamSocket from 'beam-client-node/lib/ws';

import { Adapter, User } from '@exoplay/exobot';

export const EVENTS = {
  ChatMessage: 'beamMessage',
  //UserJoin: 'beamPresence',
};

export default class BeamAdapter extends Adapter {
  static type = 'beam';

  userCache = {};

  constructor ({ username, password }) {
    super(...arguments);
    this.username = username;
    this.password = password;
  }

  register (bot) {
    super.register(...arguments);
    const { username, password } = this;

    if (!username || !password) {
      this.status = Adapter.STATUS.ERROR;
      bot.log.error('username and password are required to connect to Beam.');
      return;
    }

    let userInfo;

    this.client = new BeamClient();
    this.client.use('password', {
        username,
        password
      })
      .attempt()
      .then(this.joinChannel)
      .then(this.createSocket)
      .catch(err => {
        bot.log.error(err);
      });
  }

  joinChannel = res => {
    this.beamUser = res.body;
    return this.client.chat.join(res.body.channel.id);
  }

  createSocket = res => {
    const body = response.body;

    const userId = this.beamUser.id;
    const channelId = this.beamUser.channel.id;
    const endpoints = body.endpoitns;
    const authKey = body.authKey;

    this.socket = new BeamSocket(endpoints).boot();

    Object.keys(EVENTS).forEach(beamEvent => {
      const mappedFn = this[EVENTS[beamEvent]];
      this.socket.on(beamEvent, (...args) => mappedFn.bind(this)(...args));
      this.socket.on(beamEvent, (...args) => {
        this.bot.emitter.emit(`beam-${beamEvent}`, ...args);
      });
    });

    return this.socket.auth(channelId, userId, authkey).then(() => {
      this.status = Adapter.STATUS.CONNECTED;

      this.bot.emitter.emit('connected', this.name);
      this.bot.log.notice('Connected to Beam.');
    }).catch(err => this.bot.log.error(err));
  }

  send (message) {
    this.bot.log.debug(`Sending ${message.text} to ${message.channel}`);
    this.socket.call('msg', [message.txt]);
  }

  buildUser (msg) {
    return {
      id: msg.user_id,
      username: msg.user_name,
      roles: msg.roles,
      level: msg.level,
    };
  }

  cacheUser (user) {
    this.userCache[user.id] = {
      ...this.userCache[user.id],
      ...user,
    };
  }

  async beamMessage (msg) {
    const { user_name, user_id, channel, user_roles } = msg;
    if (user_name === this.beamUser.user_name) { return; }
    this.bot.log.debug(content);

    const beamUser = this.buildUser(msg);
    this.cacheUser(beamUser);

    const user = await this.getUser(user_id, user_name, beamUser);

    msg.message.filter(m => m.type === 'text').forEach(m => {
      if (m.whisper) {
        return super.receiveWhisper({ user, text: m.text, channel });
      }

      this.receive({ user, text: m.text, channel });
    });
  }

  async getUserIdByUserName (name) {
    let user = this.userCache.find(u => u.username === name);
    if (user) { return user.id; }

    try {
      const res = await this.client.request('/GET', 'users/search', {
        qs: {
          where: `username:eq:${name}`
        }
      });

      if (res.body && res.body[0] && res.body[0].id) {
        this.cacheUser({
          id: res.body[0].id,
          name
        });

        return res.body[0].id;
      } else {
        return;
      }
    } catch (e) {
      this.bot.log.warn(e);
    }
  }

  getRoleIdByRoleName (name) {
    return name;
  }

  getRolesForUser (userId) {
    if (this.roleMapping && this.adapterUsers && this.adapterUsers[userId]) {
      return this.adapterUsers[userId].roles
        .filter(role => this.roleMapping[role])
        .map(role => this.roleMapping[role]);
    }

    return [];
  }

  getRoles(adapterUserId, adapterUser) {
    if (adapterUser.roles) {
      return adapterUser.roles.map(role => role.name);
    }

    return false;
  }
}
