import { configureStore } from "@reduxjs/toolkit";
import auth
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
