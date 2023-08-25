import React from "react";
import qzone1 from "../../../assets/Dragon_Photos/qZone1.png";
import qzone2 from "../../../assets/Dragon_Photos/qZone2.png";
import qzone3 from "../../../assets/Dragon_Photos/qZone3.png";

const Qzone = () => {
  return (
    <div className="border border-light rounded bg-light p-2 mt-4 mb-4">
      <h4 className="d-flex justify-content-center align-items-center">Q-Zone</h4>
      <div>
        <img src={qzone1} alt="qzone1" className="img-fluid m-2" />
        <img src={qzone2} alt="qzone2" className="img-fluid m-2" />
        <img src={qzone3} alt="qzone3" className="img-fluid m-2" />
      </div>
    </div>
  );
};

export default Qzone;
