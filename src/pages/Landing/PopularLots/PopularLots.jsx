import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import Section from "../../../components/Section";
import "./PopularLots.scss";
import AuctionItemCard from "../../../components/AuctionItemCard/AuctionItemCard";

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

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {items.map((el, idx) => {
          return (
            <SwiperSlide key={"popular-lot" + idx}>
              <AuctionItemCard {...el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default PopularLots;
