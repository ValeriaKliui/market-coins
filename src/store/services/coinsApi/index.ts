import { COIN_ROWS_AMOUNT } from '@constants/coins';
import { api } from '../api';
import {
    Coin,
    GetCoinInfoParams,
    GetCoinsMarketParams,
    GetCoinHistoryParams,
    CoinHistory,
} from './interfaces';

export const coinsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCoinsMarket: builder.query<Coin[], GetCoinsMarketParams>({
            query: ({ offset = 0, limit = COIN_ROWS_AMOUNT, search }) => ({
                url: `assets?limit=${limit}&offset=${offset}${search ? `&search=${search}` : ''}`,
            }),
            transformResponse: (response: { data: Coin[] }) => response.data,
        }),
        getCoinInfo: builder.query<Coin, GetCoinInfoParams>({
            query: ({ coin }) => ({ url: `assets/${coin}` }),
            transformResponse: (response: { data: Coin }) => response.data,
        }),
        getCoinHistory: builder.query<CoinHistory[], GetCoinHistoryParams>({
            query: ({ id, interval, start, end }) => ({
                url: `assets/${id}/history?interval=${interval}&start=${start}&end=${end}`,
            }),
            transformResponse: (response: { data: CoinHistory[] }) =>
                response.data,
        }),
    }),
});

export const {
    useGetCoinsMarketQuery,
    useLazyGetCoinsMarketQuery,
    useGetCoinInfoQuery,
    useGetCoinHistoryQuery,
    useLazyGetCoinHistoryQuery,
} = coinsApi;
