import React from "react";
import { Link } from "react-router-dom";

import Section from "../../../components/Section";
import "./Discover.scss";

const Discover = () => {
  return (
    <Section id="landing-discover">
      <div className="discover-main">
        <div className="overlay"></div>
        <div className="discover">
          <div className="left">
            <img
              src="/assets/vectors/logo-white-payoff.svg"
              alt="logo-white-payoff"
            />
          </div>
          <div className="center">
            <h2>Also discover the online auctions at Troostwijk Auctions</h2>

            <Link className="discover-btn" to="/">
              discover more
            </Link>
          </div>
          <div className="right">
            <img className="twk" src="/assets/vectors/twk-logo.svg" alt="twk" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Discover;
