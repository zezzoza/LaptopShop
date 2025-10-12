import React from "react"
import s from "./sortingList.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/useApp"
import { RootState } from "@/store/store"
import { setSorting, SortType } from "@/store/slices/sortSlice"

const SortingList = () => {
    const dispatch = useAppDispatch()
    const { currentSort } = useAppSelector((state: RootState) => state.sort)

    const handleChangeSort = (type: SortType) => {
        dispatch(setSorting(type))
    }

    const sortOptions: { value: SortType; label: string }[] = [
        { value: "bySortingUp", label: "Цена по возрастанию" },
        { value: "bySortingDown", label: "Цена по убыванию" },
        { value: "byDefault", label: "По умолчанию" },
    ]

    return (
        <div className={s.sorting}>
            {sortOptions.map((option) => (
                <label key={option.value} className={s.radioLabel}>
                    <input
                        type="radio"
                        name="sort"
                        value={option.value}
                        checked={currentSort === option.value}
                        onChange={() => handleChangeSort(option.value)}
                    />
                    <span className={s.customRadio}></span>
                    {option.label}
                </label>
            ))}
        </div>
    )
}

export default SortingList
