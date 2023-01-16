import React from "react";
import { CheckIcon } from "@primer/octicons-react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import Section from "../../../components/Section";
import "./AuctionHouse.scss";
import Button from "../../../components/Button";

const items = [
  "7,400 auctions per year",
  "901,500 bids per month",
  "More than 160,000 lots per month",
  "Active in more than 120 countries",
];

const AuctionHouse = () => {
  return (
    <Section id="landing-auction-house">
      <div className="auction-house-main">
        <Fade>
          <h3>The online auction house of Europe</h3>
        </Fade>

        <div className="features">
          <Slide bottom cascade>
            {items.map((el, idx) => {
              return (
                <div key={"feature-item" + idx} className="item">
                  <div className="checkmark">
                    <CheckIcon size={24} />
                  </div>
                  <h4 className="fs-22">{el}</h4>
                </div>
              );
            })}
          </Slide>
        </div>
        <div className="d-flex justify-content-center">
          <Button to="/become-a-seller" orange>
            Auction something yourself?
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default AuctionHouse;
