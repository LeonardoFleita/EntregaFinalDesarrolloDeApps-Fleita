import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      name: "",
      lastname: "",
      email: "",
      token: "",
      localId: "",
      profilePicture: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    clearUser: (state) => {
      state.value.email = "";
      state.value.token = "";
      state.value.localId = "";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
