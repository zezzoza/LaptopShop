import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SortType = "bySortingUp" | "bySortingDown" | "byDefault"

interface SortState {
    currentSort: SortType
}

const initialState: SortState = {
    currentSort: "byDefault",
}

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        setSorting: (state, action: PayloadAction<SortType>) => {
            state.currentSort = action.payload
        },
    },
})

export const { setSorting } = sortSlice.actions
export default sortSlice.reducer
