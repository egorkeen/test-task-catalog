import { Item } from "./Item";

export type ItemsState = {
  items: Item[],
  chosenItemsIds: Array<Item["id"]>,
};