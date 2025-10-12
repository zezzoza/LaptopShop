import React, { useEffect, useState } from "react"
import s from "./search.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/useApp"
import { RootState } from "@/store/store"
import { useDebounce } from "@/hooks/useDebounce"
import { clearSearch, setSearchQuery } from "@/store/slices/searchSlice"
import { setCurrentPage } from "@/store/slices/paginationSlice"

const Search = () => {
    const dispatch = useAppDispatch()
    const { query } = useAppSelector((state: RootState) => state.search)
    const [localQuery, setLocalQuery] = useState(query)

    const debounceQuery = useDebounce(localQuery, 300)

    useEffect(() => {
        dispatch(setSearchQuery(debounceQuery))
        dispatch(setCurrentPage(1))
    }, [debounceQuery])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalQuery(e.target.value)
    }

    const handleClear = () => {
        setLocalQuery("")
        dispatch(clearSearch())
    }

    return (
        <div className={s.searchContainer}>
            <input
                type="text"
                placeholder="Поиск по названию..."
                value={localQuery}
                onChange={handleInputChange}
                className={s.searchInput}
            />
            {localQuery && (
                <button
                    onClick={handleClear}
                    className={s.clearButton}
                    type="button"
                >
                    ×
                </button>
            )}
        </div>
    )
}

export default Search
