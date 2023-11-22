import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Auth/Login";
import Home from "../pages/About/Home";
import Todo from "../pages/Boards/Todo";
import Header from "../components/Header";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todos" element={<Todo />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
