import {
    HistoryPeriod,
    HistoryPeriodValues,
} from '@store/services/coinsApi/interfaces';

export const getHoursAmount = (chartPeriod: HistoryPeriodValues) => {
    switch (chartPeriod) {
        case HistoryPeriod['1 hour']:
            return 1;
        case HistoryPeriod['12 hours']:
            return 13;
        case HistoryPeriod['24 hours']:
            return 25;

        default:
            return 1;
    }
};
