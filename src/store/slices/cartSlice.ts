import { Laptop } from "./../../types/typeLaptop"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartItem extends Laptop {
    quantity: number
}

interface CartState {
    items: CartItem[]
    isOpen: boolean
}
const initialState: CartState = {
    items: [],
    isOpen: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Laptop>) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id,
            )

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            )
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload)
            if (item) {
                item.quantity += 1
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload)
            if (item) {
                if (item.quantity === 1) {
                    state.items = state.items.filter(
                        (cartItem) => cartItem.id !== action.payload,
                    )
                } else {
                    item.quantity -= 1
                }
            }
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        closeCart: (state) => {
            state.isOpen = false
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    toggleCart,
    closeCart,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer
