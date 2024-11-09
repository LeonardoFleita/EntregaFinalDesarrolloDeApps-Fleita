import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase/database";

export const receiptApi = createApi({
  reducerPath: "receiptsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    postReceipt: builder.mutation({
      query: ({ ...receipt }) => ({
        url: "receipts.json",
        method: "POST",
        body: receipt,
      }),
    }),
  }),
});

export const { usePostReceiptMutation } = receiptApi;
