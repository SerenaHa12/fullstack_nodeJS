import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      {cartItems.map((product) => {
        return (
          <div className="d-flex" key={product._id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <Button className="btn btn-primary btn-sm">Remove</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
