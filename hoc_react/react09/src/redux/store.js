import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counterSlice";
import { todoSlice } from "./slice/todoSlice";
const rootReducer = {
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
  },
};
export const store = configureStore(rootReducer);