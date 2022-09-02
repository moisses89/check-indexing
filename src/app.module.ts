import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigApiModule } from './datasources/config-api/config-service.module'
import { TransactionApiModule } from './datasources/transaction-api/transaction-service-api.module';

@Module({
  imports: [ConfigApiModule, TransactionApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
