import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  NODE_ENV: str({
    default: 'development',
  }),
  ENVIRONMENT: str({
    default: 'dev',
  }),
  PORT: num({
    default: 8080,
  }),
});

export default env;

/******************************************************************************/

export function isDevelopment() {
  return env.ENVIRONMENT === 'dev';
}