import React from "react";

const MoneyHistories = ({ histories, total, handleDelete }) => {
  return (
    <div>
      <h2>Lịch sử chuyển tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item.toLocaleString()}$</h3>
      ))}
      <h2>Tổng tiền: {total.toLocaleString()}</h2>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Xóa lịch sử
      </button>
    </div>
  );
};

export default MoneyHistories;
