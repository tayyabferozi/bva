import React from "react";

import Benefits from "./Benefits";
import About from "./About";
import Overview from "./Overview";
import PlaceBid from "./PlaceBid";
import Auction from "./Auction";
import History from "./History";
import Brands from "./Brands";
import Feedback from "../../partials/Feedback";
import Downlaod from "../../partials/Downlaod";
import Support from "../../partials/Support";

const AboutUs = () => {
  return (
    <div id="about-us">
      <img
        className="w-100 d-block"
        src="/assets/imgs/hero-banner.png"
        alt="hero-banner"
      />

      <About />
      <Benefits />
      <Overview />
      <PlaceBid />
      <Auction />
      <History />
      <Brands />
      <Feedback grey />
      {/* <Downlaod /> */}
      <Support />
    </div>
  );
};

export default AboutUs;
