import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./productsSlice";

export const store = configureStore({
    reducer: {
        products: ProductsSlice.reducer,
    }
})