import { useGetAllLaptopsQuery } from "@/store/api/apiLaptops"
import { RootState } from "./../store/store"
import { useAppDispatch, useAppSelector } from "./useApp"
import { useEffect, useMemo } from "react"
import { setTotalItems } from "@/store/slices/paginationSlice"
import { Laptop } from "@/types/typeLaptop"

export const usePagination = (data?: Laptop[]) => {
    const dispatch = useAppDispatch()
    const { currentPage, itemsPerPage, totalItems } = useAppSelector(
        (state: RootState) => state.pagination,
    )

    useEffect(() => {
        if (data) {
            dispatch(setTotalItems(data.length))
        }
    }, [data])

    const paginationLaptops = useMemo(() => {
        if (!data) return []

        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage

        return data.slice(startIndex, endIndex)
    }, [data, currentPage, itemsPerPage])

    const totalPages = useMemo(() => {
        return Math.ceil(totalItems / itemsPerPage)
    }, [totalItems, itemsPerPage])

    return {
        paginationLaptops,
        totalPages,
        currentPage,
        itemsPerPage,
        totalItems,
    }
}
