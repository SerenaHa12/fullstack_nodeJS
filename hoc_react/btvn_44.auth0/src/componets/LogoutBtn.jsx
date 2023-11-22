import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutBtn = () => {
  const { logout } = useAuth0();
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <button
          onClick={() => logout()}
          className="btn btn-primary btn-danger btn-sm"
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default LogoutBtn;
