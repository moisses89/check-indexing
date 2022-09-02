import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TransactionApi } from './transaction-service-api.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';

@Module({
  imports: [
    HttpModule.register({
      timeout: 2000,
    })
  ],
  providers: [TransactionApi],
  exports: [TransactionApi],
})
export class TransactionApiModule {}