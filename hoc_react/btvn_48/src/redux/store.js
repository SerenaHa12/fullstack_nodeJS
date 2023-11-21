// Redux: state management tool
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/authSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
