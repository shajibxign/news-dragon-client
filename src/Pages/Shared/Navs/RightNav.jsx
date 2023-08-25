// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/Dragon_Photos/bg.png";

const RightNav = () => {
  const divbgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: '100vh',
    display: "flex",
    alignItems: "center", // Vertically center content
    justifyContent: "center", // Horizontally center content
  };

  return (
    <>
      <div>
        <h5 className="mb-3">Login with</h5>
      </div>
      <div className="d-grid gap-2 mb-4">
        <Button
          variant="outline-dark"
          className="d-flex justify-content-center align-items-center"
        >
          <FaGoogle className="mx-2"></FaGoogle> Login with Google
        </Button>
        <Button
          variant="outline-dark"
          className="d-flex justify-content-center align-items-center"
        >
          <FaGithub className="mx-2"></FaGithub> Login with Github
        </Button>
      </div>
      <div>
        <h5 className="mb-3">Find us on</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> <span className="mx-2">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> <span className="mx-2">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> <span className="mx-2">Instagram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div style={divbgStyle} className="mb-5">
        <div className="px-5 py-5 text-white text-center">
          <h5 className="mb-3">Create an Amazing Newspaper</h5>
          < p className="mb-3">
            React-Bootstrap doesn't depend on a very precise version of
            Bootstrap, we don't ship with any included CSS
          </p>
          <Button variant="info" className="mb-3">Know More</Button>
        </div>
      </div>
    </>
  );
};

export default RightNav;
