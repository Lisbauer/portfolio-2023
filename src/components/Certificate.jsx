import React from "react";
import "./certificate.css";
import "./fonts.css";

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h2 data-aos="fade-down">MY CERTIFICATES</h2>
      <div className="certificate-images">
        <div className="two-img">
          <img
            className="cert-img"
            src="../../images/devweb-cert.png"
            alt="picture"
          />

          <img
            className="cert-img"
            src="../../images/js-cert.png"
            alt="picture"
          />
        </div>
        <div className="two-img">
          <img
            className="cert-img"
            src="../../images/react-cert.png"
            alt="picture"
          />

          <img
            className="cert-img"
            src="../../images/frontend-cert.png"
            alt="picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
