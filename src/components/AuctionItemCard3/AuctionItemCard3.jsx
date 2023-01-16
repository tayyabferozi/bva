import React from "react";
import { Link } from "react-router-dom";

import "./AuctionItemCard3.scss";

const AuctionItemCard2 = ({ lotNumber, title, img, time, bids }) => {
  return (
    <Link to="/" className="auction-item-card-3 no-dec">
      <div className="item-main">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>

        <div className="text">
          <div className="lot-number">
            <div className="fs-14">{lotNumber}</div>
          </div>

          <h5 className="title">{title}</h5>

          <div className="bid-meta">
            <div className="bid">€75</div>
            <div className="bid-count">{bids} bids</div>
          </div>

          <div className="time">
            <div className="time-tag">{time}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuctionItemCard2;
