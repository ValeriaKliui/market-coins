import { Coin } from '@store/services/coinsApi/interfaces';

export interface CoinHistoryProps extends Pick<Coin, 'id'> {}
