import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import { Card, Button} from "react-bootstrap"

const LoginBtn = () => {
  const { loginWithPopup, isLoading, isAuthenticated } = useAuth0();
  console.log(isLoading);
  return (
    <>
      {!isAuthenticated && (
        <Card
          style={{
            margin: "200px auto", 
            width: "400px", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Body>
            <Card.Title>Cảm ơn bạn đã sử dụng dịch vụ của F8</Card.Title>
            <Card.Text>
              Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu
              hỏi tại đây!
            </Card.Text>
            <Button
              onClick={() => loginWithPopup()}
              className="btn btn-primary btn-sm"
              variant="primary"
              style={{margin: "0 auto", alignItem: "center"}}
            >
              LOG IN
            </Button>
          </Card.Body>
        </Card>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default LoginBtn;
