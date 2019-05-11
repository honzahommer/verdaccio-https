# verdaccio-https
🛡🔬 verdaccio middleware plugin to redirect to https if x-forwarded-proto header is set

[![verdaccio (latest)](https://img.shields.io/npm/v/verdaccio-https/latest.svg)](https://www.npmjs.com/package/verdaccio-https)
[![build status](https://img.shields.io/travis/honzahommer/verdaccio-https/master.svg)](http://travis-ci.org/honzahommer/verdaccio-https)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
[![node](https://img.shields.io/node/v/verdaccio-https/latest.svg)](https://www.npmjs.com/package/verdaccio-https)

## Requirements

* verdaccio@3.x or higher

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

## Disclaimer

This plugin is experimental and unstable. Please report any issue you found.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
