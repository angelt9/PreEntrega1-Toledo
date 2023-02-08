import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">SmartTraining</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Guía</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Suplementos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Instrumentos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Planes</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
