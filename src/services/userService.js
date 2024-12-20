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
    updateName: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}.json`,
        method: "PATCH",
        body: data,
      }),
    }),
    postReceipt: builder.mutation({
      query: ({ userId, receipt }) => ({
        url: `/users/${userId}/receipts.json`,
        method: "POST",
        body: receipt,
      }),
    }),
    setFavourites: builder.mutation({
      query: ({ userId, favourites }) => ({
        url: `/users/${userId}/favourites.json`,
        method: "PUT",
        body: favourites,
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
  useUpdateNameMutation,
  usePostReceiptMutation,
  useSetFavouritesMutation,
  useGetUserQuery,
  useGetReceiptsQuery,
} = userApi;
