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
import { fromTmstpToTime } from '@utils/fromTmstpToTime';
import { fromTmstpToDate } from '@utils/fromTmstpToDate';
import { Alert, Spin } from 'antd';
import './index.css';
import { FC } from 'react';
import { CoinChartProps } from './interfaces';
import { getChartOptions } from '@utils/getChartOptions';
import { getChartData } from '@utils/getChartData';
import { getCoinNumbers } from '@utils/getCoinNumbers';

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

export const CoinChart: FC<CoinChartProps> = ({ history, isFetching }) => {
    const coinNumbers = getCoinNumbers(history);
    const openingPrice = history[0];
    const openingPriceLabel = 'Opening price';

    const chartData = getChartData(history, openingPriceLabel);

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
            data={chartData}
            options={getChartOptions(
                coinNumbers,
                openingPrice,
                openingPriceLabel
            )}
        />
    );
};
