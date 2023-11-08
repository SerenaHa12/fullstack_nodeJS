import React, { forwardRef } from "react";

const Button = (props, ref) => {
  return (
    <>
      <button ref={ref}></button>
    </>
  );
};

export default forwardRef(Button);
