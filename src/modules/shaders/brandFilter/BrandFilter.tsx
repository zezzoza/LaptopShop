import React, { useMemo } from "react"
import s from "./brandFilter.module.scss"
import { Laptop } from "@/types/typeLaptop"
import { useAppDispatch, useAppSelector } from "@/hooks/useApp"
import { RootState } from "@/store/store"
import { setBrandFilter } from "@/store/slices/filterSlice"

const BrandFilter = ({ data }: { data?: Laptop[] }) => {
    const dispatch = useAppDispatch()
    const selectedBrands = useAppSelector(
        (state: RootState) => state.filters.brand,
    )

    const uniqueBrands = useMemo(() => {
        if (!data) return []
        const brands = data.map((laptop) => laptop.brand)
        return [...new Set(brands)].sort()
    }, [data])

    const handleChangeBrand = (brand: string) => {
        const newBrands = selectedBrands.includes(brand)
            ? selectedBrands.filter((b) => b !== brand)
            : [...selectedBrands, brand]

        dispatch(setBrandFilter(newBrands))
    }

    return (
        <div className={s.wrapper}>
            <h4>Бренды</h4>
            {uniqueBrands.map((brand) => (
                <label key={brand} className={s.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleChangeBrand(brand)}
                    />
                    <span className={s.customCheckbox}></span>
                    {brand}
                </label>
            ))}
        </div>
    )
}

export default BrandFilter
