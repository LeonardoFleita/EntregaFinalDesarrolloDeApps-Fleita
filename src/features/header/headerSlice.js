import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    value: {
      isVisible: true,
    },
  },
  reducers: {
    showHeader: (state) => {
      state.value.isVisible = true;
    },
    hideHeader: (state) => {
      state.value.isVisible = false;
    },
  },
});

export const { showHeader, hideHeader } = headerSlice.actions;

export default headerSlice.reducer;
