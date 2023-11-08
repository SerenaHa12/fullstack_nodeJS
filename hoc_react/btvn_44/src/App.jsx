import React from "react";
import LoginBtn from "./componets/LoginBtn";
import Loading from "./componets/Loading";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log('check auth',isAuthenticated);
  if (isAuthenticated === true) {
    toast.success("Login Success");
    toast.success(`Hi ${user.name}`)
  }
  return (
    <>
      <div className="container">
        {isAuthenticated ? <Home /> : <LoginBtn />}
        {isLoading && <Loading />}
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
