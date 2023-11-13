import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Card from "../page/Card";
const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Card />}></Route>
        </Routes>
      </>
    );
  };
  
  export default AppRoutes;