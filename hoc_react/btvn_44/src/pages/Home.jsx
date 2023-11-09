import React from "react";
import Form from "../componets/Form";
import LogoutBtn from "../componets/LogoutBtn";
import { User, useAuth0 } from "@auth0/auth0-react";
import Loading from "../componets/Loading";
const Home = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    const user2 = { name: user.email}
    console.log(user2.name);
    // console.log(user);
  }

  return (
    <>
      {isAuthenticated && (
        <>
          <div className="container mt-3 mx-auto">
            <div className="row" style={{ display: "block" }}>
              <div className="col-md-12">
                <div
                  className="card"
                  style={{ border: "none", alignItems: "center" }}
                >
                  <div className="card-body" style={{ alignItems: "center" }}>
                    <div className="d-flex justify-content-center">
                      <img
                        src={user.picture}
                        alt={user.name}
                        className="img-fluid rounded-circle mb-3"
                      />
                    </div>
                    <h5 className="card-title">{user.email}</h5>
                    <p className="card-text text-center">{user.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card mx-auto">
                  <div className="card-body">
                    <Form user={user}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <LogoutBtn />
        </>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default Home;
