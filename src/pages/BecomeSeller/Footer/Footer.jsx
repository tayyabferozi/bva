import React from "react";

import Section from "../../../components/Section";
import "./Footer.scss";

const Footer = () => {
  return (
    <Section id="become-seller-footer">
      <div className="left">
        <strong className="fs-14">
          BVA Auctions &copy; {new Date().getFullYear()}
        </strong>
      </div>

      <div className="right">
        <img
          className="thuiswinkel"
          src="/assets/vectors/logo-thuiswinkel-waarborg.svg"
          alt="thuiswinkel"
        />
        <img
          className="feedback"
          src="/assets/imgs/feedback-com.png"
          alt="feedback-company"
        />
      </div>
    </Section>
  );
};

export default Footer;
