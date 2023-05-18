import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import { productDetailsApi } from "./api/productDetailsApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filterReducer,
    cart: cartReducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productDetailsApi.middleware),

  preloadedState: JSON.parse(localStorage.getItem("redux-state")) || {},
});

store.subscribe(() => {
  const state = store.getState();

  const localState = {
    cart: state.cart,
  };

  localStorage.setItem("redux-state", JSON.stringify(localState));
});
