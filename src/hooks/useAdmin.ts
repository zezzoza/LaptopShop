import { RootState } from "@/store/store"
import { useAppSelector } from "./useApp"

export const useAdmin = () => {
    const { isAddModalOpen } = useAppSelector((state: RootState) => state.admin)

    return { isAddModalOpen }
}
