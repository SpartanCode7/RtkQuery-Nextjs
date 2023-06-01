'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6383958b6e6c83b7a9974a62.mockapi.io/data' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/data',
    }),
  }),
});

export const { useGetPostsQuery } = api;