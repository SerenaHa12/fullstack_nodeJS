import React, { useContext } from "react";
import { AppContext } from "../../App";

const ComponentB = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <h1>ComponentB</h1>
    </div>
  );
};

export default ComponentB;
