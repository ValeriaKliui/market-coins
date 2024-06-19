import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {
    useGetCoinHistoryQuery,
    useLazyGetCoinHistoryQuery,
} from '@store/services/coinsApi';
import { fromTmstpToTime } from '@utils/fromTmstpToTime';
import { fromTmstpToDate } from '@utils/fromTmstpToDate';
import { useEffect } from 'react';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

export const CoinChart = ({ name }) => {
    const [getCoinHistory, { data: history }] = useLazyGetCoinHistoryQuery();

    useEffect(() => {
        const timestampNow = Date.now();
        if (name)
            getCoinHistory({
                name: name?.toLowerCase(),
                interval: 'm1',
                start: timestampNow - 3600 * 1000,
                end: timestampNow,
            });
    }, [name]);

    const timestamps = history?.map(({ time }) => time);
    const timestampsData = timestamps?.map(
        (timestamp) =>
            `${fromTmstpToDate(timestamp)} ${fromTmstpToTime(timestamp)}`
    );

    console.log(history?.map(({ priceUsd }) => Math.round(priceUsd)));

    const data = {
        labels: timestampsData,
        datasets: [
            {
                type: 'line' as const,
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                data: history?.map(() => Math.round(history[0]?.priceUsd)),
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
            },
            {
                type: 'bar' as const,
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: history?.map(({ priceUsd }) => Math.round(priceUsd)),
                borderColor: 'white',
                borderWidth: 2,
            },
        ],
    };

    return <Chart type="bar" data={data} />;
};
