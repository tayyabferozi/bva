import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MegaphoneIcon,
  ClockIcon,
  HeartFillIcon,
} from "@primer/octicons-react";

import Section from "../../../components/Section";
import "./PopularLots.scss";

const items = [
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
];

const PopularLots = () => {
  return (
    <Section id="landing-popular-lots">
      <h3 className="mb-30">Popular lots</h3>

      <Swiper slidesPerView={5} spaceBetween={20}>
        {items.map((el, idx) => {
          return (
            <SwiperSlide key={"popular-lot" + idx}>
              <Link to="/" className="card no-dec">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url(${el.img})`,
                  }}
                >
                  <div className="fav">
                    <HeartFillIcon size={20} />
                  </div>
                </div>
                <div className="card-text">
                  <div>
                    <div className="fs-14 mb-2">{el.placeholder}</div>
                    <h5 className="mb-10 text-primary-1">{el.text}</h5>
                  </div>

                  <div>
                    <div className="py-2 d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="me-2">
                          <MegaphoneIcon size={18} />
                        </div>
                        <strong>€ {el.price}</strong>
                      </div>
                      <div>{el.bids} bids</div>
                    </div>

                    <div className="time-tag">
                      <ClockIcon size={16} />
                      <div>{el.time}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default PopularLots;
