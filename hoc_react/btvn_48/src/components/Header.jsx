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

const Header = (props) => {
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
  };
  return (
    <>
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
            <Box ml="10">
              <Flex>
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
              <Box as="span" color="white" mr={4}>
                {/* Welcome email */}
              </Box>
              <Button
                variant="link"
                color="white"
                onClick={handleLogout}
                className="logout"
              >
                Logout
              </Button>
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
    </>
  );
};

export default Header;
