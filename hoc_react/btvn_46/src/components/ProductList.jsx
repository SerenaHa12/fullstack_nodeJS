import React from "react";
import { getProducts } from "../api/productApi";
import { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);

  const getProduct = async () => {
    try {
      let res = await getProducts();
      // console.log(res);

      if (res && res.data) {
        setProductsList(res.data.data.listProduct);
        toast.success("Lấy danh sách sản phẩm thành công");
      }
    } catch (err) {
      toast.error("Lỗi khi lấy danh sách sản phẩm");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  console.log("check", productsList);
  return (
    <>
      <div className="container-list_product">
        <h2>Product List</h2>
        <Row>
          {productsList &&
            productsList.length > 0 &&
            productsList.map((product) => (
              <ProductItem product={product} key={product._id} />
            ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
