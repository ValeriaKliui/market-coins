import { Coin } from '@store/services/coinsApi/interfaces';

export type CoinCardProps = Partial<
    Pick<Coin, 'rank' | 'symbol' | 'name' | 'priceUsd'>
>;
