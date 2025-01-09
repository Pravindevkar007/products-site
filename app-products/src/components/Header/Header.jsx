import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "@/assets/Header/logo.jpg";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home" onClick={() => scrollToSection("home")}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", width: "auto" }} // Adjust the size as needed.
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
          <Nav.Link onClick={() => scrollToSection("categories")}>
            Product Categories
          </Nav.Link>
          <Nav.Link onClick={() => scrollToSection("countries")}>
            Countries
          </Nav.Link>
          <Nav.Link onClick={() => scrollToSection("contact")}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
