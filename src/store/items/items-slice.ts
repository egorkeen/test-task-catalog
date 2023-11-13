import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types/Item";
import { ItemsState } from "../../types/ItemState";
import { fetchAllItems } from "./items-async-actions";

const initialState: ItemsState = {
  items: [],
  chosenItemsIds: [],
};

const itemsSlice = createSlice({
  name: "@@items",
  reducers: {

    addItem: (state, action: PayloadAction<Item["id"]>) => {
      if (!state.chosenItemsIds.includes(action.payload)) {
        state.chosenItemsIds.push(action.payload);
        localStorage.setItem("chosenItemsIds", JSON.stringify(state.chosenItemsIds));
      }
    },
    removeItem: (state, action: PayloadAction<Item["id"]>) => {
      if (state.chosenItemsIds.includes(action.payload)) {
        const newIds = state.chosenItemsIds.filter((id) => id !== action.payload);
        state.chosenItemsIds = newIds;
        localStorage.setItem("chosenItemsIds", JSON.stringify(state.chosenItemsIds));
      };
    },
  },
  initialState,
  extraReducers: (builder) => {
  //   Этот экстра-редьюсер необходим,
  //   чтобы когда закончится асинхронный запрос (состояние fullfilled),
  //   карточки запушились в стейт
  builder
    .addCase(fetchAllItems.fulfilled, (state, action) => {
      state.items = action.payload;
      // после успешного api-запроса достаем id'шники и возвращаем товары в корзину
      const localItems = localStorage.getItem("chosenItemsIds");
      if (localItems !== null) {
        const localIds: Item["id"][] = JSON.parse(localItems);
        state.chosenItemsIds = localIds;
      };
    })
  },
});

export const itemsReducer = itemsSlice.reducer;
export const { addItem, removeItem } = itemsSlice.actions;