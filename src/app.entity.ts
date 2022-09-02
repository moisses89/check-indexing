export interface SafeIndexingReport {
    chainId: string;
    chainName: string;
    transactionService: string;
    lastBlockIndexed: number;
    lastBlockChain: number;
  }