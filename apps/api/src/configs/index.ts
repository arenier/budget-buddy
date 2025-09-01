import type { ConfigService } from '@nestjs/config';
import { appConfig, type IAppConfig } from './app.config';
import { databaseConfig, type IDatabaseConfig } from './database.config';

export const configurations = [appConfig, databaseConfig];

export type IConfigService = ConfigService<
  {
    app: IAppConfig;
    database: IDatabaseConfig;
  },
  true
>;
