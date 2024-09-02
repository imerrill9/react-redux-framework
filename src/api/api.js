import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'ronSwansonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ron-swanson-quotes.herokuapp.com/v2',
  }),
  endpoints: (builder) => ({
    getQuote: builder.query({
      query: () => 'quotes',
    }),
  }),
})

export const { useGetQuoteQuery } = api
