import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { postOrder } from "../api/productApi";
import { remove } from "lodash";
import { Table, Button } from "react-bootstrap";

const Cart = () => {
  const { cartOrder, removeOrder } = useContext(ProductContext);
  const handleCheckout = async () => {
    const apiKey = localStorage.getItem("apiKey");
    const checkoutList = cartOrder.map((order) => {
      return { productId: order._id, quantity: order.amount };
    });
    try {
      const res = await postOrder(apiKey, checkoutList);

      // console.log(res);
      if (res.data.code === 200) {
        // console.log("Error:", res);
        console.log(1);
        removeOrder();
      } else if (res.data.code === 401) {
        console.error("Unauthorized");
      } else {
        console.log("Error:", res);
      }
    } catch (error) {
      console.error("Async Error:", error);
    }
  };

  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartOrder.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.amount}</td>
                <td>{product.quantity}</td>
                <td>${product.price * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="primary" onClick={handleCheckout}>
          Thanh toán
        </Button>
      </div>
    </>
  );
};

export default Cart;
