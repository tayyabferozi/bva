import React from "react";
import { Link } from "react-router-dom";
import { ClockIcon, StackIcon, LocationIcon } from "@primer/octicons-react";

import "./AuctionItemCard2.scss";

const AuctionItemCard2 = ({ text, lots, location, img, time }) => {
  return (
    <Link to="/" className="auction-item-card-2 no-dec">
      <h5 className="text-primary-1 d-lg-none d-block">{text}</h5>

      <div className="item-main">
        <div className="left">
          <h5 className="text-primary-1 d-lg-block d-none pe-3">{text}</h5>
          <div className="info">
            <div className="info-item">
              <StackIcon size={20} />
              <div className="text">{lots} lots</div>
            </div>
            <div className="info-item">
              <LocationIcon size={20} />
              <div className="text">{location}</div>
            </div>
            <div className="info-item">
              <ClockIcon size={20} />
              <div className="text fw-500">
                Closes in <span className="fw-600"> {time}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={img} alt={text} />
        </div>
      </div>
    </Link>
  );
};

export default AuctionItemCard2;
