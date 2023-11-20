import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
function App() {
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
