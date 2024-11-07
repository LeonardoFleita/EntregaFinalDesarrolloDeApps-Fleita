import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopService";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: { cartReducer, [shopApi.reducerPath]: shopApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});
