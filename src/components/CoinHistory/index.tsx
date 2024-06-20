import { CoinChart } from '@components/CoinChart';
import { useChartPeriod } from '@hooks/useChartPeriod';
import { RadioGroup } from '@shared/RadioGroup';
import { useLazyGetCoinHistoryQuery } from '@store/services/coinsApi';
import {
    HistoryPeriod,
    HistoryPeriodValues,
} from '@store/services/coinsApi/interfaces';
import { FC, memo, useEffect } from 'react';
import { CoinHistoryProps } from './interfaces';

export const CoinHistory: FC<CoinHistoryProps> = memo(({ id }) => {
    const periods = Object.entries(HistoryPeriod).map((period) => ({
        label: period[0],
        value: period[1],
    }));

    const [periodData, updatePeriod] = useChartPeriod(periods[0].value);

    const [getCoinHistory, { data: history = [], isFetching }] =
        useLazyGetCoinHistoryQuery();

    useEffect(() => {
        getCoinHistory({
            id,
            ...periodData,
        });
    }, [periodData.interval, getCoinHistory]);

    const onPeriodChange = (period: HistoryPeriodValues) => {
        updatePeriod(period);
    };

    return (
        <>
            <RadioGroup options={periods} onValueChange={onPeriodChange} />
            <CoinChart history={history} isFetching={isFetching} />
        </>
    );
});
