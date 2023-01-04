import React from "react";

import Categories from "../../components/Categories";
import Product from "./Product";
import Discover from "./Discover";
import HighlightedCategories from "./HighlightedCategories";
import Feedback from "./Feedback";
import PopularLots from "./PopularLots";
import Bidding from "./Bidding/Bidding";
import AuctionHouse from "./AuctionHouse/AuctionHouse";
import Downlaod from "./Downlaod";

const Landing = () => {
  return (
    <div id="landing">
      <Categories />
      <Product />
      <Discover />
      <HighlightedCategories />
      <Feedback />
      <PopularLots />
      <Bidding />
      <Downlaod />
      <AuctionHouse />
    </div>
  );
};

export default Landing;
