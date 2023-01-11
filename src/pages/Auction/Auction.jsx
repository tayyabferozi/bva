import React from "react";

import AuctionHead from "./AuctionHead";
import "./Auction.scss";
import AuctionInfo from "./AuctionInfo";

const Auction = () => {
  return (
    <div id="auction">
      <AuctionHead />
      <AuctionInfo />
    </div>
  );
};

export default Auction;
