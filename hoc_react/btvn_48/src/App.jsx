import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { Container, Box } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
// import { Container } from '@chakra-ui/react'
function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Box p={4}>
          <Container maxW="container.xl">
            <AppRoutes />
          </Container>
        </Box>
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
