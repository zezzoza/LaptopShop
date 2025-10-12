import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FiltersState {
    brand: string[]
    priceRange: {
        min: number
        max: number
    }
}

const initialState: FiltersState = {
    brand: [],
    priceRange: {
        min: 0,
        max: 500000,
    },
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setBrandFilter: (state, action: PayloadAction<string[]>) => {
            state.brand = action.payload
        },
        setPriceRange: (
            state,
            action: PayloadAction<{ min: number; max: number }>,
        ) => {
            state.priceRange = action.payload
        },
        resetFilters: (state) => {
            state.brand = []
            state.priceRange = {
                min: 0,
                max: 500000,
            }
        },
    },
})

export const { setBrandFilter, setPriceRange, resetFilters } =
    filterSlice.actions
export default filterSlice.reducer
