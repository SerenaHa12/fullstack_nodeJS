import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../src/context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

