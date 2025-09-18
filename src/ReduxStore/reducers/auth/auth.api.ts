import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/ReduxStore/store/baseQueryWithReauth";

// Create a base query with error handling

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    exchangeToken: builder.mutation<void, { token: string }>({
      query: (body) => ({
        url: "/auth/exchange",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.query<{ id: string; name: string }, void>({
      query: () => "/me",
      providesTags: ["Profile"],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useExchangeTokenMutation,
  useGetProfileQuery,
  useLogoutMutation,
} = authApi;
