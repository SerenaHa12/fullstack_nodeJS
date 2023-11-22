"use client";

import { useState } from "react";

const PostDetail = ({ title, body }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>{data.title}</h1>
      {show && <p>{data.body}</p>}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Thu gọn
      </button>
    </div>
  );
};

export default PostDetail;
