import { Laptop } from "@/types/typeLaptop"
import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

export const laptopsApi = createApi({
    reducerPath: "laptop",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),
    tagTypes: ["laptop"],
    endpoints: (builder) => ({
        getAllLaptops: builder.query<Laptop[], void>({
            query: () => "/products",
            providesTags: ["laptop"],
        }),
    }),
})

export const { useGetAllLaptopsQuery } = laptopsApi
