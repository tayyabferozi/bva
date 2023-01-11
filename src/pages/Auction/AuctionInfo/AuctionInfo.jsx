import React from "react";
import { ClockIcon } from "@primer/octicons-react";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";
import "./AuctionInfo.scss";
import { Link } from "react-router-dom";

const AuctionInfo = () => {
  return (
    <Section id="auction-info">
      <GridContainer>
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="info">
            <div className="head closed">
              <ClockIcon size={24} />
              Auction closed
            </div>
            <div className="body">
              <div className="lot-info">
                <div>
                  <div>Winning bid</div>
                  <div className="my-1">
                    <strong>€15.00</strong>
                  </div>
                </div>
                <div className="lot-row">
                  <div className="lot-col">Location:</div>
                  <div className="lot-col">
                    <a className="text-primary-1" href="#0">
                      Amsterdam, Netherlands
                    </a>
                  </div>

                  <div className="lot-col">Pickup:</div>
                  <div className="lot-col">
                    Pickup on 17 January
                    <br />
                    <Link className="text-primary-1" href="#0">
                      View delivery options
                    </Link>
                  </div>

                  <div className="lot-col">Lot number:</div>
                  <div className="lot-col">68423-374</div>

                  <div className="lot-col">Lot type:</div>
                  <div className="lot-col">
                    <Link to="#0">21% VAT - Normal Lot</Link>
                  </div>

                  <div className="lot-col">Seller:</div>
                  <div className="lot-col">Curator</div>

                  <div className="lot-col">Auction:</div>
                  <div className="lot-col">
                    <Link className="text-primary-1" to="#0">
                      go to the auction
                    </Link>
                  </div>

                  <div className="lot-col">Organizer:</div>
                  <div className="lot-col">BVA Auctions</div>
                </div>
                <div className="py-2">
                  BVA Auctions is not the seller. We auction and bill as a
                  mediator on behalf of a third party, the seller.
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default AuctionInfo;
