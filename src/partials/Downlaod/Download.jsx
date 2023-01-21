import React from "react";
import { StarIcon, StarFillIcon } from "@primer/octicons-react";
import Fade from "react-reveal/Fade";

import Section from "../../components/Section";
// import DownloadBtns from "../../components/DownloadBtns";
import "./Download.scss";

const Download = () => {
  return (
    <Section id="download">
      <div className="main">
        <div className="img">
          <Fade left>
            <img src="/assets/imgs/visual-app-l.png" alt="visual-app" />
          </Fade>
        </div>
        <Fade right cascade>
          <div className="text">
            <h3 className="mb-30">
              Discover our BVA App to be able to bid on lots anywhere, anytime!
            </h3>
            <p className="mb-30">
              You no longer have to wait until you get home - with our app you
              can view, bid and win lots anytime, anywhere!
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

              {/* <DownloadBtns /> */}
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default Download;
