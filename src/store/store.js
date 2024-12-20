import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import headerReducer from "../features/header/headerSlice";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { userApi } from "../services/userService";

export default configureStore({
  reducer: {
    cartReducer,
    authReducer,
    headerReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});
