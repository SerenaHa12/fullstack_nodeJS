import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Card from "../page/Card";
import ProductDetail from "../page/ProductDetail"
const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Card />}></Route>
          <Route path="/productdetail" element={<ProductDetail />}></Route>
        </Routes>
      </>
    );
  };
  
  export default AppRoutes;