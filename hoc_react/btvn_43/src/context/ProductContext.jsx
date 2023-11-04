import React from "react";
import { useContext, useState, createContext } from "react";
const ProductContext = createContext({});
const ProductProvider = ({ children }) => {
  const [cartOrder, setCartOrder] = useState([]);

  const addOrder = (order) => {
    const existOrder = cartOrder.filter((o) => {
      return o._id === order._id;
    })[0];
    if (existOrder) {
      console.log(cartOrder);
      existOrder.amount = existOrder.amount + 1;

      setCartOrder([...cartOrder]);
    } else {
      const newOrder = { ...order };
      newOrder.amount = 1;
      setCartOrder([...cartOrder, newOrder]);
    }
  };

  const removeOrder = () => {
    setCartOrder([]);
  };

  return (
    <ProductContext.Provider value={{ cartOrder, addOrder, removeOrder }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
