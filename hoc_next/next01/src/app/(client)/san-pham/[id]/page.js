// export const metadata = {
//   title: "Chi tiết sản phẩm",
// };
export const generateMetadata = ({ params }) => {
  return {
    title: "Sản phẩm - " + params.id,
  };
};

const ProductDetail = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>Chi tiết sản phẩm: {params.id}</h1>
    </div>
  );
};

export default ProductDetail;
