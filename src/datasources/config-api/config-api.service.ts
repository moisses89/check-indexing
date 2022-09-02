import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Chain } from './entities/chain.entity';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigApi {
  private readonly baseUri: string;

  constructor(
    private readonly nestConfigService: NestConfigService,
    private readonly httpService: HttpService,
  ) {
    this.baseUri = nestConfigService.getOrThrow<string>('safeConfig.baseUri');
  }

  async getChains(): Promise<Chain[]> {
    try {
      const url = this.baseUri + '/api/v1/chains';
      const response = await this.httpService.axiosRef.get(url);
      let chains: Chain[] = response.data.results.map((chain) =>
          <Chain>{
            chainId: chain.chainId,
            chainName: chain.chainName,
            transactionService: chain.transactionService
          }
      )
      return chains     
    } catch (err) {
      return [];
    }
  }

}