import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { DialogState } from "./type";

const initialState: DialogState = {
  addCoins: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setAddCoins: (state, action: PayloadAction<boolean>) => {
      state.addCoins = action.payload;
    },
  },
});

export const { setAddCoins } = dialogSlice.actions;

export const dialogReducer = dialogSlice.reducer;
