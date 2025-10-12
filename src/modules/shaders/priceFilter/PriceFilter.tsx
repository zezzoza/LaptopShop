import React from "react"
import s from "./priceFilter.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/useApp"
import { RootState } from "@/store/store"
import { setPriceRange } from "@/store/slices/filterSlice"

const PriceFilter = () => {
    const dispatch = useAppDispatch()
    const priceRange = useAppSelector(
        (state: RootState) => state.filters.priceRange,
    )

    const handlePriceChange = (field: "min" | "max", value: string) => {
        const numValue = parseInt(value) || 0
        dispatch(
            setPriceRange({
                ...priceRange,
                [field]: numValue,
            }),
        )
    }

    return (
        <div className={s.wrapper}>
            <h4>Цена</h4>
            <div className={s.priceInputs}>
                <input
                    type="number"
                    placeholder="0"
                    value={priceRange.min}
                    step={1000}
                    onChange={(e) => handlePriceChange("min", e.target.value)}
                />
                <span>-</span>
                <input
                    type="number"
                    placeholder="500000"
                    value={priceRange.max}
                    step={1000}
                    onChange={(e) => handlePriceChange("max", e.target.value)}
                />
            </div>
        </div>
    )
}

export default PriceFilter
