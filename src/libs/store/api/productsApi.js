import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5fc9346b2af77700165ae514.mockapi.io",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
