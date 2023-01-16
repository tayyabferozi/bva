import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";
import { ArrowRightIcon, ArrowLeftIcon } from "@primer/octicons-react";

import AuctionItemCard from "../../../components/AuctionItemCard/AuctionItemCard";
import Section from "../../../components/Section";
import useSwiperRef from "../../../hooks/useSwiperRef";

const items = [
  {
    img: "/assets/imgs/2.jpg",
    imgs: [
      "/assets/imgs/2.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
      "/assets/imgs/8.jpg",
    ],
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    imgs: [
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
      "/assets/imgs/2.jpg",
      "/assets/imgs/8.jpg",
    ],
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    imgs: [
      "/assets/imgs/4.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/8.jpg",
      "/assets/imgs/2.jpg",
    ],
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    imgs: [
      "/assets/imgs/8.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
      "/assets/imgs/2.jpg",
    ],
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    imgs: [
      "/assets/imgs/4.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/8.jpg",
      "/assets/imgs/2.jpg",
    ],
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/2.jpg",
    imgs: [
      "/assets/imgs/8.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
      "/assets/imgs/2.jpg",
    ],
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    imgs: [
      "/assets/imgs/8.jpg",
      "/assets/imgs/2.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
    ],
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    imgs: [
      "/assets/imgs/8.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
      "/assets/imgs/2.jpg",
    ],
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    imgs: [
      "/assets/imgs/8.jpg",
      "/assets/imgs/2.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/4.jpg",
    ],
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    imgs: [
      "/assets/imgs/4.jpg",
      "/assets/imgs/19.jpg",
      "/assets/imgs/8.jpg",
      "/assets/imgs/2.jpg",
    ],
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
];

const TrendingLots = () => {
  const [nextEl, nextRef] = useSwiperRef();
  const [prevEl, prevRef] = useSwiperRef();

  return (
    <Section id="landing-trending-lots">
      <div className="d-flex justify-content-between">
        <h3 className="mb-30">Trending lots</h3>

        <div className="custom-navigation">
          <div className="nav-btn" ref={prevRef}>
            <ArrowLeftIcon size={24} />
          </div>
          <div className="nav-btn" ref={nextRef}>
            <ArrowRightIcon size={24} />
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        navigation={{ prevEl, nextEl }}
      >
        {items.map((el, idx) => {
          return (
            <SwiperSlide key={"trending-lot" + idx}>
              <AuctionItemCard {...el} uniqueName="trendingLot" idx={idx} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default TrendingLots;
