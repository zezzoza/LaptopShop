import React from "react"
import s from "./pagination.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/useApp"
import { RootState } from "@/store/store"
import {
    nextPage,
    prevPage,
    setCurrentPage,
} from "@/store/slices/paginationSlice"

const Pagination = () => {
    const dispatch = useAppDispatch()
    const { currentPage, totalItems, itemsPerPage } = useAppSelector(
        (state: RootState) => state.pagination,
    )
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    const renderPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2),
        )
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1)
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    className={`${s.pageButton} ${
                        currentPage === i ? s.active : ""
                    }`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>,
            )
        }

        return pages
    }

    return (
        <div className={s.pagination}>
            <button
                className={s.arrowButton}
                onClick={() => dispatch(prevPage())}
                disabled={currentPage === 1}
            >
                ←
            </button>

            {renderPageNumbers()}

            <button
                className={s.arrowButton}
                onClick={() => dispatch(nextPage())}
                disabled={currentPage === totalPages}
            >
                →
            </button>

            <span className={s.pageInfo}>Найдено {totalItems} элементов</span>
        </div>
    )
}

export default Pagination
