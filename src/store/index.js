import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { productsApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
