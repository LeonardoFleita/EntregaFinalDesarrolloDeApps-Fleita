import { createSlice } from "@reduxjs/toolkit";
import { totalPrice } from "../../utils/functions";

const setTotalAndDate = (state) => {
  state.value.total = totalPrice(state.value.cartItems);
  state.value.updateAt = new Date().toLocaleString();
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      cartItems: [],
      total: 0,
      updateAt: Date.now().toLocaleString(),
    },
  },
  reducers: {
    addItem: (state, action) => {
      const productInCart = state.value.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!productInCart) {
        state.value.cartItems.push(action.payload);
      } else {
        state.value.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
          return item;
        });
      }
      setTotalAndDate(state);
    },
    incrementItem: (state, action) => {
      const product = state.value.cartItems.find(
        (p) => p.id === action.payload.id
      );
      if (product && product.stock > product.quantity) {
        product.quantity += 1;
        setTotalAndDate(state);
      }
    },
    decrementItem: (state, action) => {
      const product = state.value.cartItems.find(
        (p) => p.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        setTotalAndDate(state);
      }
    },
    deleteItem: (state, action) => {
      state.value.cartItems = state.value.cartItems.filter((p) => {
        return p.id !== action.payload.id;
      });
      setTotalAndDate(state);
    },
    cleanCart: (state) => {
      state.value.cartItems = [];
      setTotalAndDate(state);
    },
  },
});

export const { addItem, incrementItem, decrementItem, cleanCart, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
