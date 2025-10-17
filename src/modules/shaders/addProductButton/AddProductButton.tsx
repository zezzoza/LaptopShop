import React from "react"
import s from "./addProductButton.module.scss"
import { useAppDispatch } from "@/hooks/useApp"
import { openAddModal } from "@/store/slices/adminSlice"
import Button from "@/modules/ui/button/Button"

const AddProductButton = () => {
    const dispatch = useAppDispatch()

    const handleAddProduct = () => {
        dispatch(openAddModal())
    }

    return (
        <Button className={s.addButton} onClick={handleAddProduct}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
            Добавить товар
        </Button>
    )
}

export default AddProductButton
