import React from "react";
import LoginBtn from "./componets/LoginBtn";
import Loading from "./componets/Loading";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  return (
    <>
      <div className="container">
        {isAuthenticated ? <Home /> : <LoginBtn />}
        {isLoading && <Loading />}
      </div>
    </>
  );
}

export default App;
