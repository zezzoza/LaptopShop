import React, { useState } from "react"
import s from "./filteringAndSorting.module.scss"
import { Laptop } from "@/types/typeLaptop"
import { useAppDispatch } from "@/hooks/useApp"
import { resetFilters } from "@/store/slices/filterSlice"
import Button from "@/modules/ui/button/Button"
import BrandFilter from "../brandFilter/BrandFilter"
import PriceFilter from "../priceFilter/PriceFilter"
import SortingList from "../sortingList/SortingList"

const FilteringAndSorting = ({ data }: { data?: Laptop[] }) => {
    const dispatch = useAppDispatch()
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    const handleResetFilters = () => {
        setIsFiltersOpen(false)
        dispatch(resetFilters())
    }

    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen)
    }

    const closeFilters = () => {
        setIsFiltersOpen(false)
    }

    return (
        <>
            <div className={s.mobileFilterButton} onClick={toggleFilters}>
                Фильтры
            </div>
            {isFiltersOpen && (
                <div className={s.overlay} onClick={toggleFilters}></div>
            )}
            <div
                className={`${s.wrapper} ${isFiltersOpen ? s.mobileOpen : ""}`}
            >
                {isFiltersOpen && (
                    <Button className={s.closeButton} onClick={closeFilters}>
                        ×
                    </Button>
                )}

                <div>
                    <div className={s.title}>Фильтрация</div>
                    <BrandFilter data={data} />
                    <PriceFilter />
                    <Button variable={1} onClick={handleResetFilters}>
                        Сбросить фильтры
                    </Button>
                </div>
                <div className={s.block}>
                    <div className={s.title}>Сортировка</div>
                    <SortingList />
                </div>
            </div>
        </>
    )
}

export default FilteringAndSorting
