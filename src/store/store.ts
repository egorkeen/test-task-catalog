import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({

});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;