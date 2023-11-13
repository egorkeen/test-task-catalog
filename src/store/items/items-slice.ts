import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types/Item";
import { ItemsState } from "../../types/ItemState";
import { fetchAllItems } from "./items-async-actions";
import chosenItem from "../../components/Cart/ChosenItem/ChosenItem";

const initialState: ItemsState = {
  items: [],
  chosenItemsIds: [],
};

const itemsSlice = createSlice({
  name: "@@items",
  reducers: {
    toggleItem: (state, action: PayloadAction<Item["id"]>) => {
      if (state.chosenItemsIds.includes(action.payload)) {
        state.chosenItemsIds.filter((id) => id !== action.payload)
      };
      state.chosenItemsIds.push(action.payload);
    },
  },
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(fetchAllItems.fulfilled, (state, action) => {
      state.items = action.payload;
    })
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { toggleItem } = itemsSlice.actions;