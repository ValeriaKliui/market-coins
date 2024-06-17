import { api } from '../api'
import { Coin } from './interfaces'

export const coinsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCoinsMarket: builder.query<Coin[], void>({
            query: () => ({
                url: `assets?limit=30&offset=${0}`,
            }),
            transformResponse: (response: { data: Coin[] }) => response.data,
        }),
    }),
})

export const { useGetCoinsMarketQuery } = coinsApi
