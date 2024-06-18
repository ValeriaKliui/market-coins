import { BASE_URL } from '@constants/coins';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: [],
    endpoints: () => ({}),
});
