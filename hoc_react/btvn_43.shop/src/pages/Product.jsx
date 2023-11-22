import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { ProductProvider } from "../context/ProductContext";

const Product = () => {
  return (
    <>
      <ProductProvider>
        <h1> Hi</h1>
        <ProductList />
        <Cart />
      </ProductProvider>
    </>
  );
};

export default Product;
