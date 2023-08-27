// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary container my-3"
      >
        <Container>
          <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/category/0">Home</Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaRegCircleUser
                    style={{ fontSize: "2rem" }}
                  ></FaRegCircleUser>
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link eventKey={2} href="#memes">
                  Login
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} href="#memes">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
