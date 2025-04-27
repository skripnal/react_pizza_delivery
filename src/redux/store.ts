import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import { pizzaService } from "../services/pizzaService";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    [pizzaService.reducerPath]: pizzaService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pizzaService.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
