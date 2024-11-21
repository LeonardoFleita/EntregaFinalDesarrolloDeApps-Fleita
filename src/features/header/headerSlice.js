import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    value: {
      isVisible: true,
      isFav: false,
    },
  },
  reducers: {
    showHeader: (state) => {
      state.value.isVisible = true;
    },
    hideHeader: (state) => {
      state.value.isVisible = false;
    },
    showFav: (state) => {
      state.value.isFav = true;
    },
    hideFav: (state) => {
      state.value.isFav = false;
    },
  },
});

export const { showHeader, hideHeader, showFav, hideFav } = headerSlice.actions;

export default headerSlice.reducer;
