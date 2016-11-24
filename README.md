# exobot-adapter-beam

## Installation

* `npm install --save @exoplay/exobot/exobot-adapter-beam`

## A Setup Example

```javascript
import Exobot from '@exoplay/exobot';
import beam from '@exoplay/exobot-adapter-beam';

const Bot = new Exobot(BOT_NAME, {
  // ...,
  adapters: [
    new beam({
      username: 'myusername', // OR set BEAM_USERNAME
      password: 'mypassword', // OR set BEAM_PASSWORD
    })
  ],
});
```

## License

LGPL licensed. Copyright 2016 Exoplay, LLC. See LICENSE file for more details.
