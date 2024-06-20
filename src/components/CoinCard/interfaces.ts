import { Coin } from '@store/services/coinsApi/interfaces';
import { ReactNode } from 'react';

export type CoinCardProps = Partial<
    Pick<Coin, 'rank' | 'symbol' | 'name' | 'priceUsd'>
> & {
    bottom: ReactNode;
};
