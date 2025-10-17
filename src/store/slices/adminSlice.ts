import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AdminState {
    isAddModalOpen: boolean
}

const initialState: AdminState = {
    isAddModalOpen: false,
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        openAddModal: (state) => {
            state.isAddModalOpen = true
        },
        closeAddModal: (state) => {
            state.isAddModalOpen = false
        },
    },
})

export const { openAddModal, closeAddModal } = adminSlice.actions
export default adminSlice.reducer
