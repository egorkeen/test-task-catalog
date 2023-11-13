import { createAsyncThunk } from "@reduxjs/toolkit";

// action для получения всех карточек с сервера
export const fetchAllItems = createAsyncThunk(
  // название action
  '@@items/fetchItems',
  async () => {
    const response = await fetch('https://appevent.ru/dev/task1/catalog');
    // разбираем массив карточек и типизируем как массив Card
    const data = await response.json();
    return data.items;
  },
);