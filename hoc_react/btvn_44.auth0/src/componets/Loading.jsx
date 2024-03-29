import React from "react";

const Loading = () => {
  console.log(1);
  return (
    <div
      className="container-spin"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        zIndex: "99",
      }}
    >
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
