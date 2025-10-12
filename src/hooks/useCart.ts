import { RootState } from "@/store/store"
import { useAppSelector } from "./useApp"

export const useCart = () => {
    const { items, isOpen } = useAppSelector((state: RootState) => state.cart)

    const totalItems = items.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    )

    return {
        items,
        isOpen,
        totalItems,
        totalPrice,
    }
}
