import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PaginationState {
    currentPage: number
    itemsPerPage: number
    totalItems: number
}

const initialState: PaginationState = {
    currentPage: 1,
    itemsPerPage: 8,
    totalItems: 0,
}

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        setTotalItems: (state, action: PayloadAction<number>) => {
            state.totalItems = action.payload
        },
        nextPage: (state) => {
            const totalPages = Math.ceil(state.totalItems / state.itemsPerPage)
            if (state.currentPage < totalPages) {
                state.currentPage += 1
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage -= 1
            }
        },
    },
})

export const { setCurrentPage, setTotalItems, nextPage, prevPage } =
    paginationSlice.actions
export default paginationSlice.reducer
