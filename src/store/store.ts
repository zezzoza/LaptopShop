import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { laptopsApi } from "./api/apiLaptops"
import paginationReducer from "./slices/paginationSlice"
import filtersReducer from "./slices/filterSlice"
import sortReducer from "./slices/sortSlice"
import searchReducer from "./slices/searchSlice"
import cartReducer from "./slices/cartSlice"
import detailReducer from "./slices/detailSlcie"
import adminReducer from "./slices/adminSlice"
import editReducer from "./slices/editSlice"

export const store = configureStore({
    reducer: {
        [laptopsApi.reducerPath]: laptopsApi.reducer,
        pagination: paginationReducer,
        filters: filtersReducer,
        sort: sortReducer,
        search: searchReducer,
        cart: cartReducer,
        detail: detailReducer,
        admin: adminReducer,
        edit: editReducer,
    },
    middleware: (GetDefaultMiddleware) =>
        GetDefaultMiddleware().concat(laptopsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
