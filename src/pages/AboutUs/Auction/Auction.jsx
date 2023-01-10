import React from "react";
import Button from "../../../components/Button";

import Section from "../../../components/Section";
import "./Auction.scss";

const Auction = () => {
  return (
    <Section id="about-us-auction">
      <div className="main">
        <img
          src="/assets/imgs/auction_section-sm.png"
          alt="auction"
          className="d-md-none d-block w-100 full-img mb-30"
        />

        <div className="text">
          <h2>Auction something yourself?</h2>
          <p>
            Whether you are a webshop looking for a solution for your return
            goods, for example, or a private individual wishing to auction the
            contents of your house, we are very curious about what you have to
            offer.
          </p>

          <Button className="mt-30" orange>
            How does auctioning work?
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Auction;
