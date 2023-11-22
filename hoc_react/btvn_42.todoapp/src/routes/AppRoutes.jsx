import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Todos from "../pages/Todos";
import Products from "../pages/Products";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <PrivateRoutes path="/todos">
        <Todos />
      </PrivateRoutes>
      <PrivateRoutes path="/products"> 
        <Products /> 
      </PrivateRoutes>
    </>
  );
};

export default AppRoutes;
