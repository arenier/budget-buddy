import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { IDatabaseConfig } from '../configs/database.config';
import type { IConfigService } from '../configs/env.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: IConfigService) => ({
        type: 'postgres',
        host: configService.get<IDatabaseConfig>('database').host,
        username: configService.get<IDatabaseConfig>('database').user,
        password: configService.get<IDatabaseConfig>('database').password,
        database: configService.get<IDatabaseConfig>('database').name,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseConfigModule {}
