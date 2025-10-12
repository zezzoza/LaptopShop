import { Laptop } from "@/types/typeLaptop"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DetailState {
    selectedProduct: Laptop | null
    isOpen: boolean
}

const initialState: DetailState = {
    selectedProduct: null,
    isOpen: false,
}

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        openDetail: (state, action: PayloadAction<Laptop>) => {
            state.isOpen = true
            state.selectedProduct = action.payload
        },
        closeDetail: (state) => {
            state.isOpen = false
            state.selectedProduct = null
        },
    },
})

export const { openDetail, closeDetail } = detailSlice.actions
export default detailSlice.reducer
