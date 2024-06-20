import { CoinHistory } from '@store/services/coinsApi/interfaces';

export interface CoinChartProps {
    history: CoinHistory[];
    isFetching: boolean;
}
