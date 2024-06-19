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
import { Alert, Spin } from 'antd';

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

export const CoinChart = ({ id }) => {
    const [getCoinHistory, { data: history = [], isFetching }] =
        useLazyGetCoinHistoryQuery();

    useEffect(() => {
        const timestampNow = Date.now();
        if (id)
            getCoinHistory({
                id,
                interval: 'm1',
                start: timestampNow - 3600 * 1000,
                end: timestampNow,
            });
    }, [id]);

    const timestamps = history?.map(({ time }) => time);
    const timestampsData = timestamps?.map(
        (timestamp) =>
            `${fromTmstpToDate(timestamp)} ${fromTmstpToTime(timestamp)}`
    );

    const coinNumbers = history?.map(({ priceUsd }) => Number(priceUsd));

    const data = {
        labels: timestampsData,
        datasets: [
            {
                type: 'line' as const,
                label: 'Opening price',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                data: history?.map(() => history[0]?.priceUsd),
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
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

    const minValueInHistory = Math.min(...coinNumbers);
    const minValueInChart = (1 - 0.001) * minValueInHistory;
    const maxValueInHistory = Math.max(...coinNumbers);
    const maxValueInChart = (1 + 0.001) * maxValueInHistory;

    if (isFetching)
        return (
            <Spin tip="Loading...">
                <Alert
                    message="Coin history is loading"
                    description="Please, wait."
                />
            </Spin>
        );

    return (
        <Chart
            type="bar"
            data={data}
            options={{
                responsive: true,
                scales: {
                    y: {
                        min: minValueInChart,
                        max: maxValueInChart,
                    },
                },
            }}
        />
    );
};
