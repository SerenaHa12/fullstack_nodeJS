import React, { memo } from "react";

const Content = () => {
  console.log("Content Render");
  return (
    <>
      <h3>Học React k khó</h3>
    </>
  );
};

export default memo(Content);

// higher order components (HOC)
// memo chỉ render khi props thay đổi