// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const { user, signOutFn } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutFn()
      .then()
      .catch((err) => console.log(err));
  };

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
            <Nav className="mx-auto ">
              <Link to="/category/0" className="text-decoration-none d-flex align-items-center">Home</Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaRegCircleUser style={{ fontSize: "2rem" }}></FaRegCircleUser>
              )}

              {user ? (
                <Button onClick={handleSignOut} variant="secondary">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
