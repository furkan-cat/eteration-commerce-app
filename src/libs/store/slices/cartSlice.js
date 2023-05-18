import { createSelector } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addToCart: (state, action) => {
      const current = state.data.find(
        (lineItem) => lineItem.id === action.payload.id
      );

      if (current) {
        current.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const current = state.data.find(
        (lineItem) => lineItem.id === action.payload
      );

      if (current) {
        current.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const current = state.data.find(
        (lineItem) => lineItem.id === action.payload
      );

      if (current) {
        current.quantity--;
      }
    },
    removefromCart: () => {},
    resetCart: (state) => {
      state.data = [];
    },
  },
});

export const totalPriceSelector = createSelector(
  (state) => state.cart.data,
  (state) => {
    const totalPrice = state.reduce(
      (acc, cur) => acc + Number(cur.price) * cur.quantity,
      0
    );
    return totalPrice;
  }
);

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removefromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
