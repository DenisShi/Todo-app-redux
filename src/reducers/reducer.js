import { configureStore, combineReducers } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todos: todoSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
