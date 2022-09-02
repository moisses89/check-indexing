import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionApi {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async getMinimumBlockIndexed(baseUrl: string): Promise<number> {
    try {
      const url = baseUrl + '/api/v1/about/master-copies/';
      const response = await this.httpService.axiosRef.get(url);
      let blocksIndexed = response.data.map((masterCopy) =>
        masterCopy.lastIndexedBlockNumber
      )
      return Math.min(... blocksIndexed);
    } catch (err) {
      //TODO handler errors
      console.log(err);
      return 0;
    }
  }

  async getLastBlock(baseUrl: String): Promise<number> {
    try {
      const url = baseUrl + '/api/v1/about/ethereum-rpc/';
      const lastBlockNumber = await (await this.httpService.axiosRef.get(url)).data.block_number;
      return lastBlockNumber;
    } catch (err) {
      //TODO handler errors
      return 0;
    }
  }

}
