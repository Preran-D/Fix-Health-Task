import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.style.css";

function MainNavBar() {
  return (
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
            alt=""
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
