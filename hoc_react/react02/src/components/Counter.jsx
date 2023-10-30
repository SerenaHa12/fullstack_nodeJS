import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log("F8");
    return () => {
      console.log("umnount");
    };
  }, []);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
