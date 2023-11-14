import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState([product]);

  useEffect(() => {
    const dataFromStr = localStorage.getItem("addedProducts");
    if (dataFromStr) {
      const storedProducts = JSON.parse(dataFromStr);
      setAddedProducts(storedProducts);
    }
  }, []); 

  const handleAddToCart = () => {
    try {
      dispatch(addtoCart({ product }));
      toast.success("Thêm sản phẩm thành công");
      console.log("product", product);

      setAddedProducts((prevAddedProducts) => [...prevAddedProducts, product]);
      localStorage.setItem("addedProducts", JSON.stringify([...addedProducts, product]));
      console.log(addedProducts);
    } catch (err) {
      toast.error("Thêm sản phẩm thất bại");
    }
  };

  // useEffect(() => {
  //   const dataFromStr = localStorage.getItem("addedProducts");
  //   console.log(dataFromStr);
  //   if (dataFromStr) {
  //     const addedProducts = JSON.parse(dataFromStr);
  //     setAddedProducts(addedProducts)
  //   }
  // }, [addedProducts]);

  return (
    <Col sm={6} md={4} lg={3} xl={3}>
      <Card style={{ marginBottom: "15px" }}>
        <Card.Img variant="top" src={product.image} />
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
