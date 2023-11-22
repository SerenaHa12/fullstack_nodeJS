import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addtoCart(product));

    // try {
    //   dispatch(addtoCart({ product }));
    //   toast.success("Thêm sản phẩm thành công");
    //   console.log("product", product);
    //   setAddedProducts((prevAddedProducts) => [...prevAddedProducts, product]);
    //   localStorage.setItem("addedProducts", JSON.stringify([...addedProducts, product]));
    //   console.log(addedProducts);
    // } catch (err) {
    //   toast.error("Thêm sản phẩm thất bại");
    // }
  };
  // console.log(cartItems);
  // useEffect(() => {
  //   localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  // }, [cartItems]);
  // console.log(cartItems);

  return (
    <Col sm={6} md={4} lg={3} xl={3}>
      <Card style={{ marginBottom: "15px" }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>$ {product.price}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
