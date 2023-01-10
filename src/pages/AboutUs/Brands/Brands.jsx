import React from "react";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section";
import "./Brands.scss";

const Brands = () => {
  return (
    <Section id="about-us-brands">
      <div className="main">
        <h2 className="title">Brands of TBAuctions</h2>

        <GridContainer>
          <div className="col-md-6">
            <div className="card">
              <img src="/assets/vectors/logo.svg" alt="logo" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src="/assets/vectors/twk-logo-blue.svg" alt="twk-logo" />
            </div>
          </div>
        </GridContainer>
      </div>
    </Section>
  );
};

export default Brands;
