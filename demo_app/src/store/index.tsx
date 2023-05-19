import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./productsSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
    reducer: {
        products: ProductsSlice.reducer,
        cart: cartSlice.reducer
    }
})