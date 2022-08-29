import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../images/icon/mechanic.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className=" text-decoration-none" to="/home">
                {" "}
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className=" text-decoration-none" to="/services">
                {" "}
                Our Services
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className=" text-decoration-none" to="/about">
                {" "}
                About us
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link className=" text-decoration-none" to="/login">
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
