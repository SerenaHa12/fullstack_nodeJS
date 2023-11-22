import ProductList from "@/components/ProductList";
export const metadata = {
  title: "Danh sách sản phẩm",
};

const Products = ({ searchParams }) => {
  return <ProductList searchParams={searchParams} />;
};

export default Products;
