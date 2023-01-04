import React from "react";

import Categories from "../../components/Categories";
import Product from "./Product";
import Discover from "./Discover";

const Landing = () => {
  return (
    <div id="landing">
      <Categories />
      <Product />
      <Discover />
    </div>
  );
};

export default Landing;
