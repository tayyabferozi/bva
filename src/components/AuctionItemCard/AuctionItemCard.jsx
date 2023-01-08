import React from "react";
import { Link } from "react-router-dom";
import {
  MegaphoneIcon,
  ClockIcon,
  HeartFillIcon,
} from "@primer/octicons-react";

import "./AuctionItemCard.scss";

const AuctionItemCard = ({ img, placeholder, text, price, bids, time }) => {
  return (
    <Link to="/" className="auction-item-card no-dec">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="fav">
          <HeartFillIcon size={20} />
        </div>
      </div>
      <div className="card-text">
        <div>
          <div className="fs-14 mb-2">{placeholder}</div>
          <h5 className="mb-10 text-primary-1">{text}</h5>
        </div>

        <div>
          <div className="py-2 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="me-2">
                <MegaphoneIcon size={18} />
              </div>
              <strong>€ {price}</strong>
            </div>
            <div>{bids} bids</div>
          </div>

          <div className="time-tag">
            <ClockIcon size={16} />
            <div>{time}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuctionItemCard;
