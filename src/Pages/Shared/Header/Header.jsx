// eslint-disable-next-line no-unused-vars
import {useContext}  from "react";
import logo from "../../../assets/Dragon_Photos/logo.png";
// import PropTypes from 'prop-types';
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import {Button, Container, Nav , Navbar } from 'react-bootstrap';
import AuthProvider, { AuthContext } from "../../../Providers/AuthProvider";
import {
  FaRegCircleUser
} from "react-icons/fa6";

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="text-center">
          <img src={logo} alt="logo" />
          <p className="text-secondary mb-0">
            Journalism Without Any Fear or Favour
          </p>
          <p className="text-secondary">
            {moment().format("MMMM Do YYYY, dddd, h:mm:ss a")}{" "}
          </p>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center mt-5 px-0 bg-light">
        <Button variant="danger" className="rounded-0 px-5">Latest</Button>
        <Marquee speed={80} className="ml-5">Australia news live: AEC publicly refutes ‘factually incorrect’ complaints from Dutton and Ley over referendum vote rules</Marquee>
      </div>
      <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary container my-3">
      <Container>
        <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav >
            {user && <Nav.Link href="#deets"><FaRegCircleUser style={{fontSize : '2rem'}}></FaRegCircleUser></Nav.Link>}
            {user ? <Nav.Link eventKey={2} href="#memes">Login</Nav.Link> : <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </>
  );
};

// Header.propTypes = {
//   user: PropTypes.shape({
//     displayName: PropTypes.object.isRequired,
//     // Add other properties if applicable
//   }).isRequired,
// };

export default Header;
