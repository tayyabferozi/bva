import React, { useState } from "react";

import PageSize from "../../../components/PageSize";
import Tabs from "../../../components/Tabs/Tabs";

const items = ["All", "Outbid", "Highest bid", "No bid"];

const MyLots = () => {
  const [tabState, setTabState] = useState("All");

  return (
    <div>
      <h4 className="fs-22">My Lots</h4>

      <div className="mt-20">
        <Tabs
          items={items}
          tabState={tabState}
          setTabState={setTabState}
          uniqueKey="my-lots-unique"
        />
        <div className="listing-head mt-0">
          <div className="left">
            <div className="fs-24">
              <strong>1</strong> lots
            </div>
          </div>

          <PageSize />
        </div>
      </div>

      <div className="no-lots">You don&apos;t have any active lots</div>
    </div>
  );
};

export default MyLots;
