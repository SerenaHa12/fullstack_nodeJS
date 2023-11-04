import { getProducts } from "../api/productApi";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
const ProductItem = ({ product }) => {
  const { addOrder } = useContext(ProductContext);
  // console.log(addOrder);

  // khi bấm addOrrder -> check nếu tồn tại tăng số lượng  
  return (
    <>
      <div className="productlist-container">
        <div className="id">{product.name}</div>
        <div className="price">{product.price}</div>
        <img className="image" src={product.image} />
        <div className="quantity">{product.quantity}</div>

        <button
          className="btn btn-primary"
          onClick={() => {
            addOrder(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductItem;
