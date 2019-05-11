// Temporary solution for requiring types will not cause the error.
import { Config } from '@verdaccio/types';

export interface ConfigHttps extends Config {
  enabled: boolean;
}
