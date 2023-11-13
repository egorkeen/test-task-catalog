import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./items/items-slice";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;