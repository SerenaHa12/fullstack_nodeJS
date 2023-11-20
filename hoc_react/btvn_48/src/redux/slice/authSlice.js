import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  error: null,
  errorForm: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = {};
      state.userInfo = {};
    },
  },
});
