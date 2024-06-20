import { CoinHistory } from '@store/services/coinsApi/interfaces';

export const getCoinNumbers = (history: CoinHistory[]) =>
    history?.map(({ priceUsd }) => priceUsd);
