import { Coin } from '@store/services/coinsApi/interfaces';

export type CoinNumbersProps = Partial<
    Pick<Coin, 'supply' | 'marketCapUsd' | 'maxSupply'>
>;
