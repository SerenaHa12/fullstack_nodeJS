import { Route, Routes } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Todo from "../pages/Todo"

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