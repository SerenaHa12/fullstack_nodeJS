import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { postOrder } from "../api/productApi";
import { remove } from "lodash";
const Cart = () => {
  const { cartOrder, removeOrder } = useContext(ProductContext);
  const handleCheckout = async () => {
    const apiKey = localStorage.getItem("apiKey");
    const checkoutList = cartOrder.map((order) => {
      return { productId: order._id, quantity: order.amount };
    });
    let res = await postOrder(apiKey, checkoutList);
    // console.log(res);

    console.log(res.data.data);
    if (res.code === 200) {
      // setProductsList(res.data.data);
      // toast.success("success");
      removeOrder();
    }
  };

  return (
    <>
      {cartOrder.map((product) => {
        return (
          <div className="container" key={product._id}>
            <p>{product.name}</p>
            <p>{product.amount}</p>
          </div>
        );
      })}
      <button className="btn btn-primary" onClick={handleCheckout}>
        Thanh toán
      </button>
    </>
  );
};

export default Cart;
