import React from "react";
import { getProducts } from "../api/productApi";
import { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let res = await getProducts();
    //   console.log("check", res);

      const product = res.data.data.listProduct;

      console.log("hi", product);
      if (res && res.data) {
        setProducts(res.data.data);
        toast.success("success");
      }
    } catch (err) {
    //   toast.error("Lỗi khi lấy danh sách sản phẩm");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container-list_product">
        {products &&
          products.length > 0 &&
          products.map((product) => {
            return <ProductItem product={product} key={product._id} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
