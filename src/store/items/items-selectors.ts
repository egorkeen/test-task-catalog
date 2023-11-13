import { RootState } from "../store";
import { Item } from "../../types";


export const selectAllItems = (state: RootState) => state.items.items;

// селектор для доступа к товарам из корзины
export const selectChosenItems = (state: RootState) => {
  // получаем все товары
  const allItems = state.items.items;
  // достаем id'шники товаров, которые пользователь добавил в корзину
  const chosenItemsIds = state.items.chosenItemsIds;

  // возвращаем отфильтрованный массив товаров из корзины
  return allItems.filter((item) => chosenItemsIds.includes(item.id));
};

// селектор для общей стоймости товаров в корзине
export const selectTotalPrice = (state: RootState) => {
  // получаем все товары
  const allItems = state.items.items;
  // достаем id'шники товаров, которые пользователь добавил в корзину
  const chosenItemsIds = state.items.chosenItemsIds;
  // сначала получаем товары в корзине
  const chosenItems = allItems.filter((item) => {
    if (chosenItemsIds.includes(item.id)) {
      return item;
    };
  });
  // подсчитываем общую стоймость товаров из корзины методом reduce
  // 0 - итоговая цена в начале
  return chosenItems.reduce((sum: number, item: Item) => sum + item.price, 0);
};
