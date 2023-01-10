import React from "react";

import Button from "../../../components/Button";
import Section from "../../../components/Section";
import "./PlaceBid.scss";

const PlaceBid = () => {
  return (
    <Section id="about-us-place-bid">
      <div className="bid-section-content">
        <img
          src="/assets/imgs/bid-sm.png"
          alt="bid"
          className="d-block d-md-none w-100 mb-30 full-img"
        />

        <h2>How can I place a bid?</h2>

        <p className="bid-section-text">
          Found your favorite lot? Now the bidding begins. It’s very simple:
          create a free account and place your bid
        </p>

        <Button orange>View the rules</Button>
      </div>
    </Section>
  );
};

export default PlaceBid;
