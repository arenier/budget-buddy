import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configurations } from './env.config';
import { envValidationSchema } from './validation/env.validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configurations,
      isGlobal: true,
      cache: true,
      expandVariables: true,
      validationSchema: envValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
})
export class AppConfigModule {}
