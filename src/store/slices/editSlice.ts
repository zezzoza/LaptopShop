import { Laptop } from "@/types/typeLaptop"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface EditState {
    isEditMode: boolean
    editingProduct: Laptop | null
}

const initialState: EditState = {
    isEditMode: false,
    editingProduct: null,
}

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        startEditing: (state, action: PayloadAction<Laptop>) => {
            state.isEditMode = true
            state.editingProduct = action.payload
        },
        stopEditing: (state) => {
            state.isEditMode = false
            state.editingProduct = null
        },
        updateEditingProduct: (
            state,
            action: PayloadAction<Partial<Laptop>>,
        ) => {
            if (state.editingProduct) {
                state.editingProduct = {
                    ...state.editingProduct,
                    ...action.payload,
                }
            }
        },
    },
})

export const { startEditing, stopEditing, updateEditingProduct } =
    editSlice.actions
export default editSlice.reducer
