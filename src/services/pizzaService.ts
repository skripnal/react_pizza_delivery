import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pizza } from "../types/types";

export const pizzaService = createApi({
  reducerPath: "pizzaService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66d9b41e4ad2f6b8ed55b736.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getPizzas: builder.query<
      Pizza[],
      { category: number; sortBy: string; searchBy: string }
    >({
      query: ({ category, sortBy, searchBy }) => {
        let params = [];
        if (category !== 0) params.push(`category=${category}`);
        if (sortBy) params.push(`sortBy=${sortBy}`);
        if (searchBy) params.push(`search=${searchBy}`);
        return `items${params.length ? "?" + params.join("&") : ""}`;
      },
    }),
    getPizzaById: builder.query<Pizza[], number>({
      query: (id: number) => {
        return `items?id=${id}`;
      },
    }),
  }),
});

export const { useGetPizzasQuery, useGetPizzaByIdQuery } = pizzaService;
