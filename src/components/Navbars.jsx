import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Navbars() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/form">Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />

      <Footer />
    </>
  );
}

export default Navbars;
