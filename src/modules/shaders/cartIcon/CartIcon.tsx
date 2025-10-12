import React from "react"
import s from "./cartIcon.module.scss"
import { useAppDispatch, useAppSelector } from "@/hooks/useApp"
import { useCart } from "@/hooks/useCart"
import { toggleCart } from "@/store/slices/cartSlice"
import Button from "@/modules/ui/button/Button"

const CartIcon = () => {
    const dispatch = useAppDispatch()
    const { totalItems } = useCart()

    const handleCartToggle = () => {
        dispatch(toggleCart())
    }

    return (
        <Button className={s.cartIcon} onClick={handleCartToggle}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
                <span className={s.badge}>
                    {totalItems > 99 ? "99+" : totalItems}
                </span>
            )}
        </Button>
    )
}

export default CartIcon
