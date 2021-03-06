# verdaccio-https
🛡🔬 verdaccio middleware plugin to redirect to https if x-forwarded-proto header is set

[![verdaccio (latest)](https://img.shields.io/npm/v/verdaccio-https/latest.svg)](https://www.npmjs.com/package/verdaccio-https)
[![build status](https://img.shields.io/travis/honzahommer/verdaccio-https/master.svg)](http://travis-ci.org/honzahommer/verdaccio-https)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
[![node](https://img.shields.io/node/v/verdaccio-https/latest.svg)](https://www.npmjs.com/package/verdaccio-https)
[![Greenkeeper badge](https://badges.greenkeeper.io/honzahommer/verdaccio-https.svg)](https://greenkeeper.io/)

## Where it All Began

> I have verdaccio running in a container on heroku running in http but can be accessed through SSL using their reverse proxy. Their method of forcing redirect to https is like this...
https://github.com/verdaccio/verdaccio/issues/1305

## Requirements

* [verdaccio@3.x or higher](https://verdaccio.org)

```
 npm install --global verdaccio-https
```

## Usage
To enable it you need to add this to your configuration file.
```
middlewares:
  https:
    enabled: true
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
