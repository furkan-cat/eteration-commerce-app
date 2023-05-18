import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productDetailsApi = createApi({
  reducerPath: "productDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5fc9346b2af77700165ae514.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductDetailsQuery } = productDetailsApi;
