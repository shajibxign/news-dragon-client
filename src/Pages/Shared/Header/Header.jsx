import React from "react";
import logo from "../../../assets/Dragon_Photos/logo.png";
import moment from "moment/moment";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="text-center">
          <img src={logo} alt="logo" />
          <p className="text-secondary mb-0">
            Journalism without any fear or favour
          </p>
          <p className="text-secondary">
            {moment().format("MMMM Do YYYY, dddd, h:mm:ss a")}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
