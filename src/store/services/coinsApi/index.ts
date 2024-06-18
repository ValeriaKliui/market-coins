import { COIN_ROWS_AMOUNT } from '@constants/films'
import { api } from '../api'
import { Coin, GetCoinsMarketParams } from './interfaces'

export const coinsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCoinsMarket: builder.query<Coin[], GetCoinsMarketParams>({
            query: ({ offset = 0, limit = COIN_ROWS_AMOUNT, search }) => ({
                url: `assets?limit=${limit}&offset=${offset}${search ? `&search=${search}` : ''}`,
            }),
            transformResponse: (response: { data: Coin[] }) => response.data,
        }),
    }),
})

export const { useGetCoinsMarketQuery, useLazyGetCoinsMarketQuery } = coinsApi
