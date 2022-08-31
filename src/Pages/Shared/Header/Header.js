import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../images/icon/mechanic.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(navigate("/"));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="home#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              {" "}
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="services">
              {" "}
              Our Services
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              {" "}
              About us
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <h5 className="text-warning">Welcome</h5>
            ) : (
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            )}

            {user ? (
              <button onClick={logout}>Log Out</button>
            ) : (
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
