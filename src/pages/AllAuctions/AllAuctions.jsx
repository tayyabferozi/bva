import React, { useState } from "react";

import Head from "./Head/Head";
import Content from "./Content";
import "./AllAuctions.scss";

const AllAuctions = () => {
  const [tabState, setTabState] = useState("Current");

  return (
    <div id="all-auctions">
      <Head tabState={tabState} setTabState={setTabState} />
      <Content />
    </div>
  );
};

export default AllAuctions;
