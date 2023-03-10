import React from "react";

import Button from "../../../components/Button";
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
            <h2>Discover the online auctions at Troostwijk Auctions</h2>

            <div className="d-lg-block d-flex justify-content-center">
              <Button orange to="/discover" className="discover-btn">
                Discover more
              </Button>
            </div>
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
