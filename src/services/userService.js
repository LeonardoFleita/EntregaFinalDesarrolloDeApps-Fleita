import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase/database";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    saveUserData: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}.json`,
        method: "PUT",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: ({ localId }) => `/users/${localId}.json`,
    }),
  }),
});

export const { useSaveUserDataMutation, useGetUserQuery } = userApi;
