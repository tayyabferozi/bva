import React from "react";
import GridContainer from "../../../components/GridContainer";

import Section from "../../../components/Section";
import "./History.scss";

const History = () => {
  return (
    <Section id="about-us-history">
      <GridContainer className="px-767-0">
        <div className="col-xl-4 col-lg-6">
          <h2>A bit of history</h2>

          <p>
            2003. The moment it all started online. From the physical auctions
            that we held in a room in 1999 to online auctions on a website. It
            doesn't seem that long ago, but in that short period of time, we
            have grown considerably. Initially, we focused on bankruptcies and
            auctions that we organise for the various government departments.
            You may well know us from that too. In the meantime, we already have
            more to offer, and we are growing fast. For example, we have offices
            in several countries and, in addition to new products and return
            goods, we also auction art and antiques, cars and real estate. In
            2018 we merged with industrial auction house Troostwijk, and
            together we belong to the TB Auctions group.
          </p>
        </div>

        <div className="col-xl-8 col-lg-6">
          <div className="content-images">
            <div className="imgs-left">
              <img src="/assets/imgs/girls_outside.png" alt="girls-outside" />
              <img src="/assets/imgs/work.png" alt="work" />
            </div>
            <div className="imgs-center">
              <img src="/assets/imgs/storage.png" alt="storage" />
            </div>
            <div className="imgs-right">
              <img src="/assets/imgs/office.png" alt="office" />
              <img src="/assets/imgs/lunch.png" alt="lunch" />
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default History;
