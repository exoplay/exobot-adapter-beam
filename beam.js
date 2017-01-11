require("source-map-support").install();require("regenerator-runtime/runtime");
(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@exoplay/exobot");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("beam-client-node");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("beam-client-node/lib/ws");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_beam_client_node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_beam_client_node___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_beam_client_node__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_beam_client_node_lib_ws__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_beam_client_node_lib_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_beam_client_node_lib_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__);
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return BeamAdapter; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) descriptor.writable = !0; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === void 0) { var parent = Object.getPrototypeOf(object); if (parent === null) { return; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === void 0) { return; } return getter.call(receiver); } };

var _class, _temp;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg), value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: !1, writable: !0, configurable: !0 } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






const EVENTS = {
  ChatMessage: 'beamMessage'
};
/* harmony export (immutable) */ exports["EVENTS"] = EVENTS;


let BeamAdapter = (_temp = _class = function (_Adapter) {
  _inherits(BeamAdapter, _Adapter);

  function BeamAdapter({ username, password }) {
    _classCallCheck(this, BeamAdapter);

    var _this = _possibleConstructorReturn(this, (BeamAdapter.__proto__ || Object.getPrototypeOf(BeamAdapter)).apply(this, arguments));

    _this.userCache = {};

    _this.joinChannel = res => {
      _this.beamUser = res.body;
      return _this.client.chat.join(res.body.channel.id);
    };

    _this.createSocket = () => {
      const body = response.body,
            userId = _this.beamUser.id,
            channelId = _this.beamUser.channel.id,
            endpoints = body.endpoitns;

      body.authKey;


      _this.socket = new __WEBPACK_IMPORTED_MODULE_1_beam_client_node_lib_ws___default.a(endpoints).boot();

      Object.keys(EVENTS).forEach(beamEvent => {
        const mappedFn = _this[EVENTS[beamEvent]];
        _this.socket.on(beamEvent, (...args) => mappedFn.bind(_this)(...args));
        _this.socket.on(beamEvent, (...args) => {
          _this.bot.emitter.emit(`beam-${ beamEvent }`, ...args);
        });
      });

      return _this.socket.auth(channelId, userId, authkey).then(() => {
        _this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.CONNECTED;

        _this.bot.emitter.emit('connected', _this.name);
        _this.bot.log.notice('Connected to Beam.');
      }).catch(err => _this.bot.log.error(err));
    };

    _this.username = username;
    _this.password = password;
    return _this;
  }

  _createClass(BeamAdapter, [{
    key: 'register',
    value: function register(bot) {
      _get(BeamAdapter.prototype.__proto__ || Object.getPrototypeOf(BeamAdapter.prototype), 'register', this).apply(this, arguments);
      const { username, password } = this;

      if (!username || !password) {
        this.status = __WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"].STATUS.ERROR;
        bot.log.error('username and password are required to connect to Beam.');
        return;
      }

      this.client = new __WEBPACK_IMPORTED_MODULE_0_beam_client_node___default.a();
      this.client.use('password', {
        username,
        password
      }).attempt().then(this.joinChannel).then(this.createSocket).catch(err => {
        bot.log.error(err);
      });
    }
  }, {
    key: 'send',
    value: function send(message) {
      this.bot.log.debug(`Sending ${ message.text } to ${ message.channel }`);
      this.socket.call('msg', [message.txt]);
    }
  }, {
    key: 'buildUser',
    value: function buildUser(msg) {
      return {
        id: msg.user_id,
        username: msg.user_name,
        roles: msg.roles,
        level: msg.level
      };
    }
  }, {
    key: 'cacheUser',
    value: function cacheUser(user) {
      this.userCache[user.id] = _extends({}, this.userCache[user.id], user);
    }
  }, {
    key: 'beamMessage',
    value: (() => {
      var _ref = _asyncToGenerator(function* (msg) {
        var _this2 = this;

        const { user_name, user_id, channel, user_roles } = msg;
        if (user_name === this.beamUser.user_name) {
          return;
        }
        this.bot.log.debug(content);

        const beamUser = this.buildUser(msg);
        this.cacheUser(beamUser);

        const user = yield this.getUser(user_id, user_name, beamUser);

        msg.message.filter(function (m) {
          return m.type === 'text';
        }).forEach(function (m) {
          if (m.whisper) {
            return _get(BeamAdapter.prototype.__proto__ || Object.getPrototypeOf(BeamAdapter.prototype), 'receiveWhisper', _this2).call(_this2, { user, text: m.text, channel });
          }

          _this2.receive({ user, text: m.text, channel });
        });
      });

      function beamMessage(_x) {
        return _ref.apply(this, arguments);
      }

      return beamMessage;
    })()
  }, {
    key: 'getUserIdByUserName',
    value: (() => {
      var _ref2 = _asyncToGenerator(function* (name) {
        let user = this.userCache.find(function (u) {
          return u.username === name;
        });
        if (user) {
          return user.id;
        }

        try {
          const res = yield this.client.request('/GET', 'users/search', {
            qs: {
              where: `username:eq:${ name }`
            }
          });

          if (res.body && res.body[0] && res.body[0].id) {
            this.cacheUser({
              id: res.body[0].id,
              name
            });

            return res.body[0].id;
          }
        } catch (e) {
          this.bot.log.warn(e);
        }
      });

      function getUserIdByUserName(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserIdByUserName;
    })()
  }, {
    key: 'getRoleIdByRoleName',
    value: function getRoleIdByRoleName(name) {
      return name;
    }
  }, {
    key: 'getRolesForUser',
    value: function getRolesForUser(userId) {
      if (this.roleMapping && this.adapterUsers && this.adapterUsers[userId]) {
        return this.adapterUsers[userId].roles.filter(role => this.roleMapping[role]).map(role => this.roleMapping[role]);
      }

      return [];
    }
  }, {
    key: 'getRoles',
    value: function getRoles(adapterUserId, adapterUser) {
      if (adapterUser.roles) {
        return adapterUser.roles.map(role => role.name);
      }

      return !1;
    }
  }]);

  return BeamAdapter;
}(__WEBPACK_IMPORTED_MODULE_2__exoplay_exobot__["Adapter"]), _class.type = 'beam', _temp);


/***/ }
/******/ ])));
//# sourceMappingURL=beam.js.map