import { Laptop } from "@/types/typeLaptop"
import { useAppSelector } from "./useApp"
import { RootState } from "@/store/store"
import { useMemo } from "react"

export const useSorting = (data: Laptop[]) => {
    const { currentSort } = useAppSelector((state: RootState) => state.sort)

    const sortedData = useMemo(() => {
        if (!data) return []

        const sorted = [...data]

        switch (currentSort) {
            case "bySortingDown":
                return sorted.sort((a, b) => b.price - a.price)
            case "bySortingUp":
                return sorted.sort((a, b) => a.price - b.price)
            case "byDefault":
                return data
        }
    }, [data, currentSort])

    return { sortedData, currentSort }
}
