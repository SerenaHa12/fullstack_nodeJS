import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  const inputRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(buttonRef);
  }, []);
  return (
    <>
      <input
        type="search"
        ref={inputRef}
        placeholder="Nhập từ khóa tìm kiếm"
      ></input>
      <button ref={buttonRef}>Click me</button>
    </>
  );
};

export default Search;

// tham chiếu tham trị con trỏ
