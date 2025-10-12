import { Laptop } from "@/types/typeLaptop"
import { useAppDispatch, useAppSelector } from "./useApp"
import { RootState } from "@/store/store"
import { useEffect, useMemo } from "react"
import { setCurrentPage } from "@/store/slices/paginationSlice"

export const useFilters = (data: Laptop[]) => {
    const dispatch = useAppDispatch()
    const { brand, priceRange } = useAppSelector(
        (state: RootState) => state.filters,
    )
    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, [brand, priceRange, dispatch])

    const filtering = (laptops: Laptop[]) => {
        return laptops.filter((laptop) => {
            if (brand.length > 0 && !brand.includes(laptop.brand)) {
                return false
            }
            if (
                laptop.price < priceRange.min ||
                laptop.price > priceRange.max
            ) {
                return false
            }
            return true
        })
    }

    const filteredLaptops = useMemo(() => {
        if (!data) return []
        return filtering(data)
    }, [data, brand, priceRange])

    return { filteredLaptops }
}
