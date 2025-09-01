import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer, validate } from 'class-validator';
import { ApiModule } from './api/api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(process.env.PORT ?? 3000);

  const configService = app.get(ConfigService);
  const globalPrefix: string = configService.get<string>('app.globalPrefix');

  Logger.log(`Application is running on: http://localhost:${configService.get('api.port')}`);
  Logger.log(`Database URI: ${configService.get('database')}`);

  // Global
  app.setGlobalPrefix(globalPrefix);
}
bootstrap();
