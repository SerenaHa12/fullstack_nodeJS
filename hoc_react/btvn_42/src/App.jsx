import Todos from "./pages/Todos";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Default/Header";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="app-container">
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="todos" element={<Todos />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="todos" element={<Todos />}></Route>
          </Routes>
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
