import React, { useEffect, useState } from "react"
import s from "./cartSidebar.module.scss"
import { useAppDispatch } from "@/hooks/useApp"
import { useCart } from "@/hooks/useCart"
import {
    clearCart,
    closeCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
} from "@/store/slices/cartSlice"
import { createPortal } from "react-dom"
import CartItem from "../cartItem/CartItem"

const CartSidebar = () => {
    const dispatch = useAppDispatch()
    const { items, isOpen, totalPrice, totalItems } = useCart()

    const handleClose = () => {
        dispatch(closeCart())
    }

    const handleIncrease = (id: number) => {
        dispatch(incrementQuantity(id))
    }

    const handleDecrease = (id: number) => {
        dispatch(decrementQuantity(id))
    }

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    if (!isOpen) return null

    return createPortal(
        <>
            <div className={s.overlay} onClick={handleClose} />

            <div className={s.sidebar}>
                <div className={s.header}>
                    <h2>Корзина ({totalItems})</h2>
                    <button className={s.closeButton} onClick={handleClose}>
                        ×
                    </button>
                </div>
                <div className={s.content}>
                    {items.length === 0 ? (
                        <div className={s.emptyCart}>В корзине пусто</div>
                    ) : (
                        <>
                            <div className={s.items}>
                                {items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        handleDecrease={handleDecrease}
                                        handleIncrease={handleIncrease}
                                        handleRemove={handleRemove}
                                        {...item}
                                    />
                                ))}
                            </div>

                            <div className={s.footer}>
                                <div className={s.total}>
                                    Итого: {totalPrice} ₽
                                </div>
                                <button
                                    onClick={handleClearCart}
                                    className={s.clearButton}
                                >
                                    Очистить корзину
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>,
        document.body,
    )
}

export default CartSidebar
