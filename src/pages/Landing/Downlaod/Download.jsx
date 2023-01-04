import React from "react";
import { StarIcon, StarFillIcon } from "@primer/octicons-react";

import Section from "../../../components/Section";
import "./Download.scss";
import DownloadBtns from "../../../components/DownloadBtns";

const Download = () => {
  return (
    <Section id="landing-download">
      <div className="main">
        <div className="img">
          <img src="/assets/imgs/visual-app-l.png" alt="visual-app" />
        </div>
        <div className="text">
          <h3 className="mb-30">
            Discover our BVA App to be able to bid on lots anywhere, anytime!
          </h3>
          <p className="mb-30">
            You no longer have to wait until you get home - with our app you can
            view, bid and win lots anytime, anywhere!
          </p>

          <div className="ratings mb-30">
            <StarFillIcon size={20} />
            <StarFillIcon size={20} />
            <StarFillIcon size={20} />
            <StarFillIcon size={20} />
            <StarIcon size={20} />
          </div>

          <div className="download-from">
            <h5>Download from:</h5>

            <DownloadBtns />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Download;
