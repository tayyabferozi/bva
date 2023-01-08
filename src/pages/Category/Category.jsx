import React from "react";

import Hero from "./Hero";
import Results from "./Results/Results";
import "./Category.scss";

const Category = () => {
  return (
    <div id="category">
      <Hero />
      <Results />
    </div>
  );
};

export default Category;
