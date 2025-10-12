import { Laptop } from "@/types/typeLaptop"
import { useAppDispatch, useAppSelector } from "./useApp"
import { RootState } from "@/store/store"
import { useEffect, useMemo } from "react"

export const useSearch = (data: Laptop[]) => {
    const { query } = useAppSelector((state: RootState) => state.search)

    const searchedData = useMemo(() => {
        if (!data) return []
        if (query.trim().length == 0) return data

        const searchString = query.toLocaleLowerCase().trim()

        return data.filter((laptop) =>
            laptop.name.toLocaleLowerCase().includes(searchString),
        )
    }, [data, query])

    return { searchedData }
}
