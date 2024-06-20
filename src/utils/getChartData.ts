import { CoinHistory } from '@store/services/coinsApi/interfaces';
import { fromTmstpToDate } from './fromTmstpToDate';
import { fromTmstpToTime } from './fromTmstpToTime';
import { getCoinNumbers } from './getCoinNumbers';

export const getChartData = (
    history: CoinHistory[],
    openingPriceLabel: string
) => {
    const timestamps = history?.map(({ time }) => time);
    const coinNumbers = getCoinNumbers(history);
    const openingPrice = history[0];

    const timestampsData = timestamps?.map(
        (timestamp) =>
            `${fromTmstpToDate(timestamp)} ${fromTmstpToTime(timestamp)}`
    );

    const data = {
        labels: timestampsData,
        datasets: [
            {
                type: 'line' as const,
                label: openingPriceLabel,
                borderColor: 'rgb(255, 99, 132)',
                data: history?.map(() => openingPrice?.priceUsd),
            },
            {
                type: 'bar' as const,
                label: 'Price',
                backgroundColor: 'rgb(75, 192, 192)',
                data: coinNumbers,
                borderColor: 'white',
                borderWidth: 2,
            },
        ],
    };

    return data;
};
