import React from "react";

const color = (Component) => {
  const color =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  // kế thừa logic
  return function MyComponent(props) {
    console.log(color);
    return (
      <div className="color" style={{ color }}>
        <Component {...props} />
      </div>
    );
  };
};

export default color;
