import { Injectable } from '@nestjs/common';
import { SafeIndexingReport } from './app.entity';
import { ConfigApi } from './datasources/config-api/config-api.service';
import { Chain } from './datasources/config-api/entities/chain.entity'
import { TransactionApi } from './datasources/transaction-api/transaction-service-api.service';

@Injectable()
export class AppService {
  constructor(
    private readonly safeConfigApi: ConfigApi,
    private readonly safeTransactionApi : TransactionApi
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async getChains(): Promise<Chain[]>{
    const result = await this.safeConfigApi.getChains();

    return result
  }

  async getSafeReportIndexing(): Promise<SafeIndexingReport[]> {
    const chains = await this.safeConfigApi.getChains();
    
   
  let report: SafeIndexingReport[] = await Promise.all(chains.map(async (chain) => 
    <SafeIndexingReport>{
      chainId: chain.chainId,
      chainName: chain.chainName,
      transactionService: chain.transactionService,
      lastBlockIndexed: await this.safeTransactionApi.getMinimumBlockIndexed(chain.transactionService),
      lastBlockChain: await this.safeTransactionApi.getLastBlock(chain.transactionService),
    }
));
    
    console.log(report);
    return report;
  }
}
