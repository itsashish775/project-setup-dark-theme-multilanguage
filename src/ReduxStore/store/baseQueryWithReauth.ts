// src/store/baseQueryWithReauth.ts
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// 👉 setup baseQuery
const rawBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  credentials: "include",
});

// 👉 wrapper for error handling
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     // clear auth state if you want
//     api.dispatch({ type: "/logout" });

//     // redirect to login (for now hard redirect)
//     window.location.href = "/en/login";
//   }

  return result;
};
