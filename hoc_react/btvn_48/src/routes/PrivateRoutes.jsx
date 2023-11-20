import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Alert from "react-bootstrap/Alert";

const PrivateRoutes = (props) => {
  // console.log("props", props);

  return (
    <>
      <Alert variant="danger" dismissible className="mt-3">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>You don not have permission to access this route.</p>
      </Alert>
    </>
  );
};

return (
  <>
    <Routes>
      <Route path={props.path} element={props.children}></Route>
    </Routes>
  </>
);

export default PrivateRoutes;
