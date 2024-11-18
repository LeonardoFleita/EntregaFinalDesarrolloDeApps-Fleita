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
      state.value.name = "";
      state.value.lastname = "";
      state.value.email = "";
      state.value.token = "";
      state.value.localId = "";
      state.value.profilePicture = "";
    },
    setProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload;
    },
  },
});

export const { setUser, clearUser, setProfilePicture } = authSlice.actions;

export default authSlice.reducer;
