import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/axiosClient";
import { FULFILLED, IDLE, PENDING, REJECTED } from "../../utils/constants";
const initialState = {
  loading: false,
  taskData: {},
  error: null,
  success: false,
  status: IDLE,
};

export const getTask = createAsyncThunk(
  "task/getTask",
  async (requestParams = null, thunkApi) => {
    try {
      const response = await apiClient.get("/tasks");
      const columns = response.data.columns;
      const tasks = response.data.tasks;
      console.log(tasks);

      const taskDataFilter = columns.map((column, index) => {
        const taskList = tasks.filter((task) => {
          return task.column === column.column;
        });

        return { ...column, taskList };
      });

      return taskDataFilter;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue({
        code: e.response.status,
        message: e.response.data.message,
      });
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTask.pending, (state) => {
        state.status = PENDING;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        console.log(action);
        state.status = FULFILLED;
        state.taskData = action.payload;
        state.error = {};
      })
      .addCase(getTask.rejected, (state, action) => {
        state.status = REJECTED;
        state.error = action.payload;
      });
  },
});
