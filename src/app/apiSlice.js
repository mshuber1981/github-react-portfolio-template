// https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Config
import { gitHubUsername } from "../data";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/users/${gitHubUsername}`,
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
