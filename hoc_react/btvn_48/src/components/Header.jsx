import { useNavigate } from "react-router-dom";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Link as ChakraLink,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/authSlice";
import { authSlice } from "../redux/slice/authSlice";

const Header = () => {
  const { userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();
  const navigate = useNavigate();

  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setHideHeader(true);
    }
  });

  const handleLogout = () => {
    toast.success("Logout Success");
    navigate("/");
    localStorage.removeItem("apiKey");
    localStorage.removeItem("email");
  };

  return (
    <>
      {!hideHeader && (
        <Box bg="gray.800" p={4}>
          <Container maxW="container.xl">
            <Flex alignItems="center">
              {/* Logo */}
              <Box>
                <ChakraLink
                  to="/"
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                >
                  Kanban
                </ChakraLink>
              </Box>

              {/* Left side navigation */}
              {((userInfo && !userInfo.apiKey) ||
                window.location.pathname === "/todos" ||
                window.location.pathname === "/") && (
                <>
                  <Box ml="10">
                    <Flex>
                      {" "}
                      <Link
                        to="/"
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          marginRight: "10px",
                        }}
                      >
                        Home
                      </Link>
                      <Link
                        to="/todos"
                        style={{ color: "white", fontWeight: "bold" }}
                      >
                        ToDo
                      </Link>
                    </Flex>
                  </Box>

                  {/* Right side content */}
                  <Box ml="auto" display="flex" alignItems="center">
                    {userInfo && userInfo.apiKey && (
                      <Box as="span" color="white" mr={4}>
                        Welcome {userInfo.apiKey}
                      </Box>
                    )}
                    {userInfo && userInfo.apiKey === true ? (
                      <Button
                        variant="link"
                        color="white"
                        onClick={handleLogout}
                        className="logout"
                      >
                        Logout
                      </Button>
                    ) : (
                      <Link
                        to="/login"
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        Login
                      </Link>
                    )}
                    <Button
                      ml={4}
                      onClick={toggleColorMode}
                      colorScheme="teal"
                      size="sm"
                    >
                      {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
                    </Button>
                  </Box>
                </>
              )}
            </Flex>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Header;
