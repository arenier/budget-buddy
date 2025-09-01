import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import type { IConfigService } from './configs';
import type { IAppConfig } from './configs/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  const configService = app.get<IConfigService>(ConfigService);
  const appConfig = configService.get<IAppConfig>('app');

  Logger.log(`Application running on: http://localhost:${appConfig.port}`);

  app.setGlobalPrefix(appConfig.globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
