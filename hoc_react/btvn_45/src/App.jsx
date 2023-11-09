//
import "./App.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

// import page
import Home from "./pages/Home";

// import layout
import Header from "./layouts/Header";

// import component
import Loading from "./components/Loading";
function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Home />
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
