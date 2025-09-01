import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs/config.module';
import { DatabaseConfigModule } from '../database/database-config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule, DatabaseConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
