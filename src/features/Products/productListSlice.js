import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductById, fetchProductsByFilter } from "./productListAPI";

const initialState = {
  products: [],
  status: "idle",
  selectedProduct: null,
};

// redux thunk / returns function unlike typical action creator
export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    //console.log(response);
    return response; 
  }
);


export const fetchProductsByfilterAsync = createAsyncThunk(
  "product/fetchProductsByfilter",
  async (filter) => {
    const response = await fetchProductsByFilter(filter);
    // The value we return becomes the `fulfilled` action payload
    //console.log(response);
    return response;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    //console.log(response);
    return response;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductBySearch: (state, action) => {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByfilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByfilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.product.products;
export const selectProductById = (state) => state.product.selectedProduct;

export const { fetchProductBySearch } = productSlice.actions;

export default productSlice.reducer;
