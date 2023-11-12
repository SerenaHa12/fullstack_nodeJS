import React, { useState, useMemo, useCallback } from "react";
import MoneyHistories from "./MoneyHistories";
const MoneyTransfer = () => {
  const [histories, setHistories] = useState([]);
  const [cost, setCost] = useState(0);
  const handleChange = (e) => {
    setCost(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([...histories, +cost]);
    console.log("check", cost, histories);
    setCost("");
  };
  const total = useMemo(
    () =>
      histories.reduce((acc, cur) => {
        return acc + cur;
      }, 0),
    [histories]
  );

  const handleDelete = useCallback(() => {
    setHistories([]);
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Số tiền ..."
          onChange={handleChange}
          value={cost}
        />
        <button>Add</button>
      </form>

      <MoneyHistories
        histories={histories}
        total={total}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default MoneyTransfer;
