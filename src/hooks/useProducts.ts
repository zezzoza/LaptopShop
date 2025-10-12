import { Laptop } from "@/types/typeLaptop"
import { useFilters } from "./useFilters"
import { usePagination } from "./usePagination"
import { useSorting } from "./useSorting"
import { useSearch } from "./useSearch"

export const useProducts = (data: Laptop[]) => {
    const { searchedData } = useSearch(data)
    const { filteredLaptops } = useFilters(searchedData)
    const { sortedData } = useSorting(filteredLaptops)
    const { paginationLaptops } = usePagination(sortedData)

    return {
        paginationLaptops,
    }
}
