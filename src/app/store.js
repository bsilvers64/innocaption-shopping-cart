import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../features/Products/productListSlice";
import cartReducer from "../features/Cart/cartSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
