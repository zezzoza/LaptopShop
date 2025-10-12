import React from "react"
import s from "./cartItem.module.scss"
import { Laptop } from "@/types/typeLaptop"

interface CartItemProps extends Laptop {
    quantity: number
    handleIncrease: (id: number) => void
    handleDecrease: (id: number) => void
    handleRemove: (id: number) => void
}

const CartItem = ({
    id,
    images,
    name,
    price,
    quantity,
    currency,
    handleIncrease,
    handleDecrease,
    handleRemove,
}: CartItemProps) => {
    return (
        <div className={s.cartItem}>
            <img src={images[0]} alt={name} className={s.itemImage} />
            <div className={s.itemInfo}>
                <h4 className={s.itemName}>{name}</h4>
                <div>
                    <div className={s.itemPrice}>
                        {price * quantity} {currency}
                    </div>
                    <div className={s.quantityControls}>
                        <button
                            onClick={() => handleDecrease(id)}
                            className={s.quantityButton}
                        >
                            −
                        </button>
                        <span className={s.quantity}>{quantity}</span>
                        <button
                            onClick={() => handleIncrease(id)}
                            className={s.quantityButton}
                        >
                            +
                        </button>
                        <button
                            onClick={() => handleRemove(id)}
                            className={s.removeButton}
                        >
                            ×
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
