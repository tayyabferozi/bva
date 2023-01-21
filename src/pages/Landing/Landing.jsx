import React from "react";

import Categories from "../../components/Categories";
import Product from "./Product";
// import Discover from "./Discover";
// import HighlightedCategories from "./HighlightedCategories";
// import Feedback from "../../partials/Feedback";
import PopularLots from "./PopularLots";
import TrendingLots from "./TrendingLots";
import ClosingAuctions from "./ClosingAuctions";
import Bidding from "./Bidding/Bidding";
import Downlaod from "../../partials/Downlaod";
import AuctionHouse from "./AuctionHouse";
import Support from "../../partials/Support";

const Landing = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <div id="landing">
      <Categories
        isMenuActive={isMenuActive}
        setIsMenuActive={setIsMenuActive}
      />
      <Product />
      {/* <Discover />
      <HighlightedCategories />
      <Feedback /> */}
      <PopularLots />
      <TrendingLots />
      <Bidding />
      <ClosingAuctions />
      <AuctionHouse />
      {/* <Downlaod /> */}
      <Support />
    </div>
  );
};

export default Landing;
