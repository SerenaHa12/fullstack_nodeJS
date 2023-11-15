import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: ["Item 1", "Item 2"],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    update: (state, action) => {
      state.todoList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fullfilled, (state, action) => {
      state.todoList = action.payload;
    });
  },
});

//Redux Thunk
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();
  return data;
});
