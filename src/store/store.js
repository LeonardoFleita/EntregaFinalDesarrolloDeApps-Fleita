import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../services/shopService";
import cartReducer from "../features/cart/cartSlice";
import { receiptApi } from "../services/receiptsService";

export default configureStore({
  reducer: {
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [receiptApi.reducerPath]: receiptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(receiptApi.middleware),
});
