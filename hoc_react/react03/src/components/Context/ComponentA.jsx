import React from "react";
import { AppContext } from "../../App";

const ComponentA = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        console.log(context);
        return (
          <div>
            <h1>Component A</h1>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ComponentA;
