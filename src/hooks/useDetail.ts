import { RootState } from "@/store/store"
import { useAppSelector } from "./useApp"

export const useDetail = () => {
    const { selectedProduct, isOpen } = useAppSelector(
        (state: RootState) => state.detail,
    )

    return { selectedProduct, isOpen }
}
