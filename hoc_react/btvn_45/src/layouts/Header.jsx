import React from "react";
import { useColorMode } from "@chakra-ui/react";

// react-bootstrap
import { Button, ButtonGroup } from '@chakra-ui/react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// icons
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Game Number</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Button onClick={toggleColorMode} colorScheme='teal' size='sm'>
              {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

