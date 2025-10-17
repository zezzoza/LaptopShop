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
        addLaptop: builder.mutation<Laptop, Omit<Laptop, "id">>({
            query: (newLaptop) => ({
                url: "/products",
                method: "POST",
                body: newLaptop,
            }),
            invalidatesTags: ["laptop"],
        }),
        updateLaptop: builder.mutation<Laptop, Laptop>({
            query: (updatedLaptop) => ({
                url: `/products/${updatedLaptop.id}`,
                method: "PUT",
                body: updatedLaptop,
            }),
            invalidatesTags: ["laptop"],
        }),
        deleteLaptop: builder.mutation<void, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["laptop"],
        }),
    }),
})

export const {
    useGetAllLaptopsQuery,
    useAddLaptopMutation,
    useUpdateLaptopMutation,
    useDeleteLaptopMutation,
} = laptopsApi
