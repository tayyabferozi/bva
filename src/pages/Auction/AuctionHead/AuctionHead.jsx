import React from "react";
import { UploadIcon } from "@primer/octicons-react";

import Section from "../../../components/Section";
import "./AuctionHead.scss";

const AuctionHead = () => {
  return (
    <Section id="auction-head">
      <div className="">
        <div>
          <h3 className="fs-22 mb-10">
            Rinke Nijburg 'Made in England' tekening
          </h3>

          <p>
            Pickup: Amsterdam, Netherlands |{" "}
            <span className="text-underline c-pointer">
              <UploadIcon className="me-2" size={18} />
              Share
            </span>{" "}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AuctionHead;
