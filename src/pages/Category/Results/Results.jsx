import React, { useState } from "react";
import clsx from "clsx";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import Filters from "./Filters";
import Listing from "./Listing";

import "./Results.scss";

const Results = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Section id="category-results">
      <GridContainer>
        <div className={clsx("col-md-4 col-lg-3", !showFilters && "hid")}>
          <Filters setShowFilters={setShowFilters} />
        </div>
        <div className={clsx("col-md-8 col-lg-9", showFilters && "hid")}>
          <Listing setShowFilters={setShowFilters} />
        </div>
      </GridContainer>
    </Section>
  );
};

export default Results;
