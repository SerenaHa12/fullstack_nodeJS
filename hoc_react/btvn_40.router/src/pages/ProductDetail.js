import { products } from "../data";

const ProductDetail = ({ id }) => {
  const product = products.find((product) => product.id === +id);
  console.log("product", product);
  if (!product) return null;
  return `<div>${product.name}</div>`;
};

export default ProductDetail;
