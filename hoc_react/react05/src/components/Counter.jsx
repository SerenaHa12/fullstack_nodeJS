import React from "react";
import { useSelector } from "../core/useSeclector";
const Counter = () => {
  const { state, dispatch } = useSelector();
  const handleIncrement = () => {
    dispatch({ type: "counter/increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "counter/decrement" });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
