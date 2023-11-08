import React from "react";
import Form from "../componets/Form";
import LogoutBtn from "../componets/LogoutBtn";
import { User, useAuth0 } from "@auth0/auth0-react";
import Loading from "../componets/Loading";
const Home = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <>
          <h5>{user.email}</h5>
          <p>{user.name}</p>
          <img src={user.picture} alt={user.name} />
          <Form />
          <LogoutBtn />
        </>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
