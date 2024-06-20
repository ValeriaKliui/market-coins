import { Coin } from '@store/services/coinsApi/interfaces';

export interface CoinInfoProps extends Pick<Coin, 'id'> {}
