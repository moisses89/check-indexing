import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigApi } from './config-api.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';

@Module({
  imports: [
    HttpModule.register({
      timeout: 2000,
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigApi],
  exports: [ConfigApi],
})
export class ConfigApiModule {}