import { RootState } from "@/store/store"
import { useAppSelector } from "./useApp"

export const useEdit = () => {
    const { isEditMode, editingProduct } = useAppSelector(
        (state: RootState) => state.edit,
    )

    return { isEditMode, editingProduct }
}
