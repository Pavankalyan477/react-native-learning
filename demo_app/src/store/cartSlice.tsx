import { createSelector, createSlice } from "@reduxjs/toolkit";

interface item {
    product: any,
    quantity: number
}
const items1: item[] = [];

const initialState = {
    items: items1,
    deliveryFee: 50,
    freeDeliveryFrom: 1000
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProd = action.payload.product;
            const cartItem = state.items.find((i) => i.product.id === newProd.id);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                state.items.push({product: newProd, quantity: 1});
            }
        },
        changeQunatity: (state, action) => {
            const { productId, amount } = action.payload;
            const cartItem = state.items.find((item) => item.product.id === productId);
            if (cartItem) {
                cartItem.quantity += amount;

                if (cartItem.quantity <= 0) {
                    state.items = state.items.filter((item) => item !== cartItem);
                }
            }
        },
        clearCartItems: (state, action) => {
            state.items = action.payload;
        }
    }
})

export const selectNumberOfItems = (state : any) => state.cart.items.length;

export const selectSubtotal = (state : any) =>
  state.cart.items.reduce(
    (sum : any, cartItem: any) => sum + cartItem.product.price * cartItem.quantity,
    0
  );

const cartSelector = (state: any) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart: any, subtotal: any) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);

