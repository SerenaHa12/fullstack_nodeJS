import { products } from "../data";
import ProductList from "../components/ProductList";

const Product = () => {
  return `<div class="container">
  <div class="row">
      ${ProductList({ products })}
  </div></div>`;
};

export default Product;
