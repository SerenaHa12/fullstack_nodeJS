import { getProducts } from "../api/productApi";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
const ProductItem = ({ product }) => {
  const { addOrder } = useContext(ProductContext);
  // console.log(addOrder);

  // khi bấm addOrrder -> check nếu tồn tại tăng số lượng
  return (
    <>
      <Card style={{ width: "18rem", marginBottom: "1rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Quantity: {product.quantity}</Card.Text>
          <Button variant="primary" onClick={() => addOrder(product)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
