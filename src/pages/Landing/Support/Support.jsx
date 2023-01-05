import React from "react";
import { Link } from "react-router-dom";

import Section from "../../../components/Section";
import "./Support.scss";

const Support = () => {
  return (
    <Section id="landing-support">
      <img src="/assets/imgs/man.png" alt="man" className="man" />

      <div className="top">
        <div className="left">
          <h3 className="text-primary-2 text-center">Do you need help?</h3>
        </div>

        <div className="center">
          <Link to="/" className="no-dec text-primary-2">
            <h5 className="fw-500">Frequently Asked Questions</h5>
          </Link>
          <p>
            Do you have a question? Then you will find the answer in the{" "}
            <Link to="/">frequently asked questions</Link>
          </p>
        </div>

        <div className="right">
          <Link to="/" className="no-dec text-primary-2">
            <h5 className="fw-500">Contact</h5>
          </Link>
          <p>
            We are happy to help you on our{" "}
            <Link to="/">service & contact page</Link>
          </p>
        </div>
      </div>

      <div className="bottom">
        <h5>Pay easily and securely with</h5>

        <img src="/assets/vectors/logo-ideal.svg" alt="ideal" />
        <img src="/assets/vectors/logo-visa.svg" alt="visa" />
        <img src="/assets/vectors/logo-maestro.svg" alt="maestro" />
        <img src="/assets/vectors/logo-bancontact.svg" alt="bancontact" />
      </div>
    </Section>
  );
};

export default Support;
