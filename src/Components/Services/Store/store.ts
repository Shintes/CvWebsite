import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
import { translationApi } from "../translationApi";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [translationApi.reducerPath]: translationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(translationApi.middleware),
});
