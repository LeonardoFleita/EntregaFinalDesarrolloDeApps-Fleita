import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase/database";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    saveUserData: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}.json`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfilePicture: builder.mutation({
      query: ({ userId, profilePicture }) => ({
        url: `/users/${userId}.json`,
        method: "PATCH",
        body: { profilePicture },
      }),
    }),
    postReceipt: builder.mutation({
      query: ({ userId, receipt }) => ({
        url: `/users/${userId}/receipts.json`,
        method: "POST",
        body: receipt,
      }),
    }),
    getUser: builder.query({
      query: ({ localId }) => `/users/${localId}.json`,
    }),
    getReceipts: builder.query({
      query: ({ localId }) => `/users/${localId}/receipts.json`,
    }),
  }),
});

export const {
  useSaveUserDataMutation,
  useUpdateProfilePictureMutation,
  usePostReceiptMutation,
  useGetUserQuery,
  useGetReceiptsQuery,
} = userApi;
