import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiKey, baseAuthUrl } from "../firebase/database";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signUp?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    login: builder.mutation({
      query: ({ ...auth }) => ({
        url: `/accounts:signInWithPassword?key=${apiKey}`,
        method: "POST",
        body: auth,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ idToken, newPassword }) => ({
        url: `/accounts:update?key=${apiKey}`,
        method: "POST",
        body: {
          idToken,
          password: newPassword,
          returnSecureToken: true,
        },
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useChangePasswordMutation,
} = authApi;
