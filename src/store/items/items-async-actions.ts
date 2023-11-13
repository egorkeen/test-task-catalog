import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../../utils/constants";

// action для получения всех карточек с сервера
export const fetchAllItems = createAsyncThunk(
  // название action
  '@@items/fetchItems',
  async () => {
    const response = await fetch(apiUrl);
    // разбираем массив карточек и типизируем как массив Card
    const data = await response.json();
    return data.items;
  },
);