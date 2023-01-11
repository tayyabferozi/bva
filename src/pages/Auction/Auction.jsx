import React from "react";

import AuctionHead from "./AuctionHead";
import AuctionInfo from "./AuctionInfo";
import Discover from "../Landing/Discover";
import Bidding from "../Landing/Bidding/Bidding";
import Downlaod from "../../partials/Downlaod";
import Support from "../../partials/Support";
import Details from "./Details";
import "./Auction.scss";

const Auction = () => {
  return (
    <div id="auction">
      <AuctionHead />
      <AuctionInfo />
      <Details />

      <div className="mt-50">
        <Discover />
      </div>
      <Bidding />
      <Downlaod />
      <Support />
    </div>
  );
};

export default Auction;
