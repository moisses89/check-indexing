import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Chain } from './datasources/config-api/entities/chain.entity'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/chains')
  getChains(): Promise<Chain[]> {
    return this.appService.getChains();
  }

  @Get('/report')
  getSafeIndexingReport(){
    return this.appService.getSafeReportIndexing();
  }

}
