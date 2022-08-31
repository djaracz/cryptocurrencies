import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CoinsState } from "./type";
import { coinApi } from "../../api/coinsApi";
import { saveCryptocurrencies } from "../../utils/cacheCryptocurrencies";
import { Coin } from "../../model/Coin";

const initialState: CoinsState = {
  status: "idle",
  items: [],
  selectedItems: [],
};

export const loadCoins = createAsyncThunk("coins/list", async () => {
  const response = await coinApi.getList();
  return response.data;
});

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setSelectedItems: (state, action: PayloadAction<Coin[]>) => {
      state.selectedItems = action.payload;
    },
    removeSelectedItem: (state, action: PayloadAction<Coin["id"]>) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload
      );
      saveCryptocurrencies(newSelectedItems);
      state.selectedItems = newSelectedItems;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCoins.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(loadCoins.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(loadCoins.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { setSelectedItems, removeSelectedItem } = coinsSlice.actions;

export const coinsReducer = coinsSlice.reducer;
