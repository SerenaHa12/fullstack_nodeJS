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
      if (!email) {
        toast.error("Please enter your email");
        return;
      }

      let { data, code } = await getApiKeyLogin(email);
      console.log(data);

      // console.log(email);
      if (code === 200) {
        console.log(data);
        const apiKey = data.data.apiKey;
        localStorage.setItem("apiKey", apiKey);
        localStorage.setItem("email", email);
        toast.success(`Login Success: ${data.message}`);

        navigate("/todos");
        // } else if {
        //   toast.error(`Login Fail: ${data.message}`);
      } else if (code === 400) {
        toast.error(`Login Fail: ${data.message}`);
      }
    } catch (error) {
      // toast.error(`Error: ${error.data.message}`);
      // console.log("check", error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="login-form">
              <h1 className="text-center">Login</h1>
              <Form className="my-3" onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="my-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
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
                  onClick={handleLogin}
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
