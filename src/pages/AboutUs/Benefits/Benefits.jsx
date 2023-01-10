import React from "react";
import { CheckIcon } from "@primer/octicons-react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import "./Benefits.scss";

const benefits = [
  "All auctions are completely online",
  "Bidding 24/7",
  "Wide range: from headphones to houses",
  "Auction something yourself on our platform",
];

const Benefits = () => {
  return (
    <Section id="about-us-benefits">
      <div className="badge">View all auctions</div>

      <h3>The benefits of BVA Auctions</h3>

      <GridContainer className="items" rowClassName="main-row">
        {benefits.map((el, idx) => {
          return (
            <div key={"about-us-benefits" + idx} className="col-lg-3 col-sm-6">
              <div className="tick">
                <CheckIcon size={40} />
              </div>
              <div className="fs-24 fs-767-20">{el}</div>
            </div>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Benefits;
