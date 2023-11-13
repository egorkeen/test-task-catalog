import { RootState } from "../store";
import { Item } from "../../types";

export const selectAllItems = (state: RootState) => state.items.items;

export const selectChosenItems = (state: RootState) => {
  const allItems = state.items.items;
  const chosenItemsIds = state.items.chosenItemsIds;

  return allItems.filter((item) => chosenItemsIds.includes(item.id));
}