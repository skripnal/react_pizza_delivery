import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import CartItem from "../../types/types";

interface CartSliceState {
  items: CartItem[];
}

const initialState: CartSliceState = {
  items: [],
};

const findCartItem = (state: CartSliceState, payload: CartItem) => {
  return state.items.find(
    (item) =>
      item.id === payload.id &&
      item.type === payload.type &&
      item.size === payload.size
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = findCartItem(state, action.payload);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    minusItem: (state, action) => {
      const findItem = findCartItem(state, action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
    },
    removeItem: (state, action) => {
      const findItem = findCartItem(state, action.payload);
      state.items = state.items.filter((item) => item !== findItem);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCartGroupItems = (id: number) => (state: RootState) =>
  state.cartSlice.items
    .filter((item) => item.id === id)
    .reduce((sum, item) => {
      return sum + item.count;
    }, 0);

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions;
export const selectTotalPrice = (state: RootState) =>
  state.cartSlice.items.reduce((sum, item) => sum + item.price * item.count, 0);
export const selectCartItems = (state: RootState) => state.cartSlice.items;

export default cartSlice.reducer;
