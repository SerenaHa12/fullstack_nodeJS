import React from "react";
import city from "@/data/tinh_tp.json";
import district from "@/data/quan_huyen.json";

const CheckoutPage = () => {
  return (
    <div className="container mb-4">
      <h1>Chon tinh thanh pho</h1>
      <select name="" id="">
        <option>Chon Tinh/TP</option>
      </select>
      <select name="" id="">
        <option>Chon Quan/ Huyen</option>
      </select>
    </div>
  );
};

export default CheckoutPage;
