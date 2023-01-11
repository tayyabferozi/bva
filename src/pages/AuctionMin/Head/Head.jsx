import React, { useState } from "react";
import clsx from "clsx";
import {
  ClockIcon,
  ChevronRightIcon,
  UploadIcon,
} from "@primer/octicons-react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import Tabs from "../../../components/Tabs/Tabs";
import "./Head.scss";

const tabs = ["Closed lots"];

const Head = () => {
  const [tabsState, setTabsState] = useState("Closed lots");

  return (
    <Section id="auction-head">
      <GridContainer className="px-0 mt-30">
        <div className="col-md-3">
          <div className="auction-info">
            <div className={clsx("top", "closed")}>
              <ClockIcon className="me-2" size={24} />
              <strong className="fs-18">The auction is closed</strong>
            </div>
            <div className="bottom">
              <div>Auction information</div>

              <ChevronRightIcon className="me-2" size={18} />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="d-flex flex-column justify-content-between h-100 gap-20">
            <div>
              <h3 className="fs-22 mb-10">
                Horeca, catering en verhuur apparatuur | Partnerveiling
                Troostwijk Auctions
              </h3>

              <p>
                Pickup: Milsbeek, Netherlands | 6 lots |{" "}
                <span className="text-underline c-pointer">
                  <UploadIcon className="me-2" size={18} />
                  Share
                </span>{" "}
              </p>
            </div>

            <Tabs
              items={tabs}
              tabState={tabsState}
              setTabsState={setTabsState}
            />
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Head;
