import { useEffect, useState } from "react";
import Header from "../../components/Header";
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
  FormControl,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slice/authSlice";

const Login = () => {
  const { userInfo, error } = useSelector((state) => state.auth);
  console.log(userInfo);
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState("dhchsgs12@gmail.com");
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  // const [hideHeader, setHideHeader] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      if (!email) {
        toast.error("Please enter your email");
        return;
      }
      dispatch(loginUser({ email: email }));
    } catch ({ error, data }) {
      toast.error(`Error: Tài khoản không tồn tại`);
    }
    // setHideHeader(true);
  };

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey) {
      navigate("/todos");
    }
  }, []);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container centerContent>
        <Flex alignItems="center" justifyContent="center" marginTop="100px">
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

            <FormControl>
              <Box mb={4}>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  size="md"
                  value={email}
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
            </FormControl>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Login;
