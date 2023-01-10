import React from "react";

import Section from "../../../components/Section";
import "./Overview.scss";

const Overview = () => {
  return (
    <Section id="about-us-overview">
      <h1>A brief overview in figures of 2020</h1>

      <img
        className="d-md-none d-block map"
        src="/assets/vectors/map.svg"
        alt="map"
      />

      <div className="overview-main">
        <div>
          <div className="figures-item">
            <h3 className="figures-item-number">71 900 000</h3>
            <h3 className="figures-item-comment">Visits</h3>
          </div>
          <div className="figures-item">
            <h3 className="figures-item-number">2 380 000 </h3>
            <h3 className="figures-item-comment">Registered users</h3>
          </div>
        </div>
        <div>
          <div className="figures-item">
            <h3 className="figures-item-number">7400 </h3>
            <h3 className="figures-item-comment">Auctions</h3>
          </div>
          <div className="figures-item">
            <h3 className="figures-item-number">1 900 000 </h3>
            <h3 className="figures-item-comment">Lots</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Overview;
