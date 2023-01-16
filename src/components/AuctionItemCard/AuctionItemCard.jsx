import React from "react";
import { Link } from "react-router-dom";
import {
  MegaphoneIcon,
  ClockIcon,
  HeartFillIcon,
} from "@primer/octicons-react";
import { Pagination, Autoplay } from "swiper";

import "./AuctionItemCard.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const AuctionItemCard = ({
  imgs,
  img,
  placeholder,
  text,
  price,
  bids,
  time,
  idx,
}) => {
  return (
    <Link to="/auction" className="auction-item-card no-dec">
      <div className="card-img">
        {imgs ? (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={true}
            autoplay={{
              duration: 1000,
              disableOnInteraction: false,
            }}
          >
            {imgs.map((el, idx2) => {
              return (
                <SwiperSlide key={"uniqueName" + idx + idx2}>
                  <img src={el} alt={text} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <img src={img} alt={text} />
        )}
        <div className="fav">
          <HeartFillIcon size={16} />
        </div>
      </div>
      <div className="card-text">
        <div>
          <div className="fs-14 mb-2">{placeholder}</div>
          <h5 className="mb-1 text-primary-1">{text}</h5>
        </div>

        <div>
          <div className="py-2 d-flex justify-content-between align-items-center bids">
            <div className="d-flex justify-content-between align-items-center">
              <div className="me-2">
                <MegaphoneIcon size={14} />
              </div>
              <strong>€ {price}</strong>
            </div>
            <div>{bids} bids</div>
          </div>

          <div className="time-tag">
            <ClockIcon size={14} />
            <div>{time}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuctionItemCard;
