import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products.json";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: {
      products,
      selectedCategory: "",
      filteredProducts: [],
    },
  },
  reducers: {
    setCategory: (state, action) => {
      state.value.filteredProducts = products.filter((product) =>
        product.category.includes(action.payload)
      );
      state.value.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = shopSlice.actions;

export default shopSlice.reducer;
