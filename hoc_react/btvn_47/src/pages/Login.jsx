import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
  useColorMode,
  Link,
  Flex,
  Center,
  Container,
} from "@chakra-ui/react";
import { getApiKeyLogin } from "../api/todoApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error("Please enter your email");
        // return;
      }

      let res = await getApiKeyLogin(email);
      console.log(res.data);
      if (res.code === 200) {
        const apiKey = res.data.apiKey;
        console.log(1);
        localStorage.setItem("apiKey", apiKey);
        localStorage.setItem("email", email);
        toast.success(`Login Success: Đăng nhập thành công`);

        navigate("/todos");
        // } else if {
        // toast.error(`Login Fail: ${data.message}`);
      } else if (res.code === 400) {
        console.log(2);
        toast.error(`Login Fail: ${data.message}`);
      } else {
        toast.error(`Login Fail: ${data.message}`);
      }
    } catch ({ error, data }) {
      toast.error(`Error: Tài khoản không tồn tại`);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container centerContent>
        <Flex alignItems="center" justifyContent="center" marginTop="300px">
          <Box
            p={8}
            maxW="md"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            bg={colorMode === "light" ? "white" : "gray.800"}
          >
            <Heading as="h2" size="xl" textAlign="center" mb={6}>
              Login
            </Heading>
            <form onSubmit={handleLogin}>
              <Box mb={4}>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  size="md"
                />
              </Box>
              <Button
                type="submit"
                colorScheme="teal"
                size="md"
                width="full"
                onClick={handleLogin}
                mb={4}
              >
                Log In
              </Button>
              <Link onClick={handleBackToHome} color="teal.500">
                Back to Home
              </Link>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Login;
