import Https, { ConfigHttps } from '../src/index';

import { Logger } from '@verdaccio/types';

// @ts-ignore
const config: ConfigHttps = {
  enabled: true
};

const logger: Logger = {
  error: e => console.warn(e),
  info: e => console.warn(e),
  debug: e => console.warn(e),
  child: e => console.warn(e),
  warn: () => {},
  http: e => console.warn(e),
  trace: e => console.warn(e)
};

describe('Https plugin', () => {
  test('should test https', () => {
    // @ts-ignore
    const https = new Https(config, { logger, config: undefined });
    expect(https).toBeDefined();
  });
});
