import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Todos from "../pages/Todos"

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
    </>
  );
};

export default AppRoutes;
