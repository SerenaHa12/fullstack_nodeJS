import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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

import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();
  const navigate = useNavigate();

  const { logout, user } = useContext(UserContext);

  // console.log(user.email);

  const [hideHeader, setHideHeader] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/login") {
      setHideHeader(true);
    }
  });

  const handleLogout = () => {
    logout();
    toast.success("Logout Success");
    navigate("/");
  };
  return (
    <>
      {/* {!hideHeader && ( */}
      <Box bg="gray.800" p={4}>
        <Container maxW="container.xl">
          <Flex alignItems="center">
            {/* Logo */}
            <Box>
              <ChakraLink
                href="/"
                fontSize="xl"
                fontWeight="bold"
                color="white"
              >
                Kanban
              </ChakraLink>
            </Box>

            {/* Left side navigation */}
            <Box ml="10">
              {(user && !user.auth) ||
              location.pathname === "/todos" ||
              location.pathname === "/" ? (
                <Flex>
                  <ChakraLink href="/" mr={4} color="white">
                    Home
                  </ChakraLink>
                  <ChakraLink href="/todos" color="white">
                    TodoLists
                  </ChakraLink>
                </Flex>
              ) : null}
            </Box>

            {/* Right side content */}
            <Box ml="auto" display="flex" alignItems="center">
              {user && user.email && (
                <Box as="span" color="white" mr={4}>
                  Welcome {user.email}
                </Box>
              )}
              {user && user.auth === true ? (
                <Button variant="link" color="white" onClick={handleLogout} className="logout">
                  Logout
                </Button>
              ) : (
                <ChakraLink href="/login" color="white">
                  Login
                </ChakraLink>
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
          </Flex>
        </Container>
      </Box>
      {/* )} */}
    </>
  );
};

export default Header;
