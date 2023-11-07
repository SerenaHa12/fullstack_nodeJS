import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutBtn = () => {
  const { logout } = useAuth0();
  return (
    <>
      <button onClick={() => logout()} className="btn btn-primary btn-danger btn-sm">
        LOGOUT
      </button>
    </>
  );
};

export default LogoutBtn;
