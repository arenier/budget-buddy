import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  port: parseInt(process.env.API_PORT ?? '9000', 10),
  globalPrefix: '/api/v1',
}));
