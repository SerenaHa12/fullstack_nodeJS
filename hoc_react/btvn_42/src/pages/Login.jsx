import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { getApiKeyLogin } from "../api/todoApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // if (!email) {
      //   toast.error("Please enter your email");
      //   return;
      // }

      let { data, status } = await getApiKeyLogin(email);
      // console.log(data);

      if (status === 200 && data.apiKey) {
        const apiKey = data.data.apiKey;
        localStorage.setItem("apiKey", apiKey);
        toast.success(`Login Success: ${data.message}`);
        console.log(apiKey);

        navigate("/todos");
      } else {
        toast.error(`Login Fail: ${data.message}`);
      }
    } catch (error) {
      toast.error(`Error: ${error.response.data.message}`);
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login-form">
              <h1 className="text-center">Login</h1>
              <Form className="my-3">
                <Form.Group controlId="formBasicEmail" className="my-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    // value="eve.holt@reqres.in"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  block="true"
                  onClick={() => handleLogin()}
                >
                  Log In
                </Button>
                <div className="back mx-auto">
                  <a href="#">Go Back</a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
