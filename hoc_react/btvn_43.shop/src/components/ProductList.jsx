import { useState, useEffect, useContext } from "react";
import { getProducts } from "../api/productApi";
import { Card, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import ProductItem from "./ProductItem";
import { ProductContext } from "../context/ProductContext";
const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const getProduct = async () => {
    const apiKey = localStorage.getItem("apiKey");
    let res = await getProducts(apiKey);
    // console.log(res);

    console.log(res.data.data);
    if (res && res.data) {
      setProductsList(res.data.data);
      toast.success("success");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="container-list_product">
        {productsList &&
          productsList.length > 0 &&
          productsList.map((product) => {
            return <ProductItem product={product} key={product._id} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
