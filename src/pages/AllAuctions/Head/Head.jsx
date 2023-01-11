import React from "react";

import Section from "../../../components/Section";
import Tabs from "../../../components/Tabs/Tabs";
import "./Head.scss";

const tabs = ["Current", "Future", "Closed", "Map"];

const Head = ({ tabState, setTabState }) => {
  return (
    <Section id="all-auctions-head">
      <h2>All auctions</h2>

      <div className="tabs">
        <Tabs
          uniqueKey="all-auction-tab"
          items={tabs}
          tabState={tabState}
          setTabState={setTabState}
        />
      </div>
    </Section>
  );
};

export default Head;
