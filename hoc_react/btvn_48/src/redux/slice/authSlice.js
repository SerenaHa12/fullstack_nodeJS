import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/axiosClient";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../utils/constants";
const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (requestParams, thunkApi) => {
    try {
      const { data } = await apiClient.get("/api-key", requestParams);
      if (data.apiKey) {
        localStorage.setItem("apiKey", data.apiKey);
        return data.apiKey;
      }
    } catch (err) {
      return thunkApi.rejectWithValue({
        code: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.error = {};
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    // register user
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = PENDING;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);
        state.status = FULFILLED;
        state.userInfo.apiKey = action.payload;
        state.error = {};
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = REJECTED;
        state.error = action.payload;
      });
  },
});
