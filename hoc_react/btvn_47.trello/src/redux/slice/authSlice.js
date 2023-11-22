import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../services/api.js";

const initialState = {
  userInfo: {},
  error: null,
  status: IDLE,
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
