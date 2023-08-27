// eslint-disable-next-line no-unused-vars
import logo from "../../../assets/Dragon_Photos/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import {Button} from 'react-bootstrap';


const Header = () => {
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
      <div className="container d-flex justify-content-center align-items-center mt-3 px-0 bg-light">
        <Button variant="danger" className="rounded-0 px-5">Latest</Button>
        <Marquee speed={80} className="ml-5">Australia news live: AEC publicly refutes ‘factually incorrect’ complaints from Dutton and Ley over referendum vote rules</Marquee>
      </div>
    </>
  );
};

export default Header;
