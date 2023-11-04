import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Products from "../pages/Product";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <PrivateRoutes path="/products"> 
        <Products /> 
      </PrivateRoutes>
    </>
  );
};

export default AppRoutes;
