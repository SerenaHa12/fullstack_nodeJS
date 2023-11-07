import React from "react";
import LoginBtn from "./componets/LoginBtn";
import Loading from "./componets/Loading";
import LogoutBtn from "./componets/LogoutBtn";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
    <div className="container">
      {/* <Loading /> */}
      <LoginBtn />
      {/* <LogoutBtn /> */}
    </div>
    </>
  );
}

export default App;
