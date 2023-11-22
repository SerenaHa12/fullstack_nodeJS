// Redux: state management tool
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice.js";
import { taskSlice } from "./slice/taskSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    task: taskSlice.reducer,
  },
});

export default store;
