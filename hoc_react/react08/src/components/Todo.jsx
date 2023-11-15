import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../middlewares/fetchTodo";
const Todo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo);
  }, []);
  
  return (
    <div>
      <h1>Todo</h1>
    </div>
  );
};

export default Todo;
