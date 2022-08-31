import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { coinsReducer } from "./coins/slice";
import { dialogReducer } from "./dialog/slice";

export const setupStore = () =>
  configureStore({
    reducer: {
      dialog: dialogReducer,
      coins: coinsReducer,
    },
  });

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
