import { HistoryPeriodValues } from '@store/services/coinsApi/interfaces';
import { getHoursAmount } from '@utils/getHoursAmount';
import { getStartTimestamp } from '@utils/getStartTimestamp';
import { useMemo, useState } from 'react';

type ChartPeriodReturns = [
    {
        interval: HistoryPeriodValues;
        start: number;
        end: number;
    },
    (period: HistoryPeriodValues) => void,
];

export const useChartPeriod = (
    initialPeriod: HistoryPeriodValues
): ChartPeriodReturns => {
    const [chartPeriod, setChartPeriod] =
        useState<HistoryPeriodValues>(initialPeriod);

    const hoursAmount = getHoursAmount(chartPeriod);
    const startTimestamp = getStartTimestamp(hoursAmount);

    const updatePeriod = (period: HistoryPeriodValues) =>
        setChartPeriod(period);

    const memoizedValue = useMemo(
        () => [
            {
                interval: chartPeriod,
                start: startTimestamp,
                end: Date.now(),
            },
            updatePeriod,
        ],
        [chartPeriod, startTimestamp]
    );
    return memoizedValue as ChartPeriodReturns;
};
