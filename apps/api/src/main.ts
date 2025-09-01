import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

// import { AppEnvDto } from './dtos/app.env.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // Typage du ConfigService pour AppEnvDto
  const configService =
    app.get<
      ConfigService<
        {
          'app.globalPrefix': string;
        },
        true
      >
    >(ConfigService);
  const globalPrefix = configService.get<string>('app.globalPrefix');
  // Logger.log(`Application is running on: http://localhost:${appConfig.port}`);

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
