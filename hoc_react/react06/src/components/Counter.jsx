import React from "react";
import { useState } from "react";
import Content from "./Content";
import color from "../libs/Color";

const Counter = () => {
  const [count, setCount] = useState(0);
  let a;
  if (count < 10) {
    a = count;
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="btn btn-primary"
      >
        +
      </button>
      <Content count={a} />
    </>
  );
};

export default color(Counter);
