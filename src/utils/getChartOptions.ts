import { CoinHistory } from '@store/services/coinsApi/interfaces';
import { fromTmstpToDate } from './fromTmstpToDate';
import { fromTmstpToTime } from './fromTmstpToTime';
import { TooltipItem } from 'chart.js';

export const getChartOptions = (
    coinNumbers: string[],
    openingPrice: CoinHistory,
    openingPriceLabel: string
) => {
    const formattedNums = coinNumbers.map((str) => Number(str));

    const minValueInHistory = Math.min(...formattedNums);
    console.log(coinNumbers, minValueInHistory);
    const minValueInChart = (1 - 0.001) * minValueInHistory;
    const maxValueInHistory = Math.max(...formattedNums);
    const maxValueInChart = (1 + 0.001) * maxValueInHistory;

    return {
        responsive: true,
        scales: {
            y: {
                min: minValueInChart,
                max: maxValueInChart,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: (chart: TooltipItem<'bar' | 'line'>[]) => {
                        if (chart[0].dataset.label === openingPriceLabel) {
                            return `Compared time: ${fromTmstpToDate(openingPrice?.time)} ${fromTmstpToTime(openingPrice?.time)}`;
                        } else return chart[0].label;
                    },
                },
            },
        },
    };
};
