import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./layout/Header";
import { ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";
import { restoreCart } from "./redux/cartSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    console.log(storedCartProducts);
    if (storedCartProducts) {
      dispatch(restoreCart(storedCartProducts));
    }
  }, []);

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
