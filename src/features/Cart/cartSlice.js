import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle',
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item to cart with quantity 1
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Decrease quantity if greater than 1
        } 
      else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          ); // Remove item if quantity is 1
      }
    },
  },
});


export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;