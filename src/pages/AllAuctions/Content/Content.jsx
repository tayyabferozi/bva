import React from "react";

import Section from "../../../components/Section";
import AuctionItemCard2 from "../../../components/AuctionItemCard2";
import GridContainer from "../../../components/GridContainer";
import PageSize from "../../../components/PageSize";

const items = [
  {
    img: "/assets/imgs/68434.jpg",
    text: "Elektronica o.a. wasmachines, oven en koelkast",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "02:10:45",
  },
  {
    img: "/assets/imgs/68365.jpg",
    text: "Inventaris café-restaurant Thembi",
    lots: 233,
    location: "Amersfoort, Netherlands",
    time: "03:24:68",
  },
  {
    img: "/assets/imgs/67186.jpg",
    text: "Motoren en Scooters",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:02",
  },
  {
    img: "/assets/imgs/67556.jpg",
    text: "LED Design en Tuin Verlichting",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:45",
  },
  {
    img: "/assets/imgs/68434.jpg",
    text: "Elektronica o.a. wasmachines, oven en koelkast",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "02:10:45",
  },
  {
    img: "/assets/imgs/68365.jpg",
    text: "Inventaris café-restaurant Thembi",
    lots: 233,
    location: "Amersfoort, Netherlands",
    time: "03:24:68",
  },
  {
    img: "/assets/imgs/67186.jpg",
    text: "Motoren en Scooters",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:02",
  },
  {
    img: "/assets/imgs/67556.jpg",
    text: "LED Design en Tuin Verlichting",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:45",
  },
  {
    img: "/assets/imgs/68434.jpg",
    text: "Elektronica o.a. wasmachines, oven en koelkast",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "02:10:45",
  },
  {
    img: "/assets/imgs/68365.jpg",
    text: "Inventaris café-restaurant Thembi",
    lots: 233,
    location: "Amersfoort, Netherlands",
    time: "03:24:68",
  },
  {
    img: "/assets/imgs/67186.jpg",
    text: "Motoren en Scooters",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:02",
  },
  {
    img: "/assets/imgs/67556.jpg",
    text: "LED Design en Tuin Verlichting",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:45",
  },
  {
    img: "/assets/imgs/68434.jpg",
    text: "Elektronica o.a. wasmachines, oven en koelkast",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "02:10:45",
  },
  {
    img: "/assets/imgs/68365.jpg",
    text: "Inventaris café-restaurant Thembi",
    lots: 233,
    location: "Amersfoort, Netherlands",
    time: "03:24:68",
  },
  {
    img: "/assets/imgs/67186.jpg",
    text: "Motoren en Scooters",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:02",
  },
  {
    img: "/assets/imgs/67556.jpg",
    text: "LED Design en Tuin Verlichting",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:45",
  },
  {
    img: "/assets/imgs/68434.jpg",
    text: "Elektronica o.a. wasmachines, oven en koelkast",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "02:10:45",
  },
  {
    img: "/assets/imgs/68365.jpg",
    text: "Inventaris café-restaurant Thembi",
    lots: 233,
    location: "Amersfoort, Netherlands",
    time: "03:24:68",
  },
  {
    img: "/assets/imgs/67186.jpg",
    text: "Motoren en Scooters",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:02",
  },
  {
    img: "/assets/imgs/67556.jpg",
    text: "LED Design en Tuin Verlichting",
    lots: 36,
    location: "Amersfoort, Netherlands",
    time: "03:38:45",
  },
];

const Content = () => {
  return (
    <Section id="all-auctions-content">
      <h3 className="mt-20 fs-22">Current auctions</h3>

      <div className="d-flex justify-content-between align-items-center mt-20">
        <div className="fs-20">
          <strong>69</strong> Auctions
        </div>
        <PageSize />
      </div>

      <div className="items my-30">
        <GridContainer>
          {items.map((el, idx) => {
            return (
              <div key={"closing-auc" + idx} className="col-md-6">
                <AuctionItemCard2 {...el} />
              </div>
            );
          })}
        </GridContainer>
      </div>
    </Section>
  );
};

export default Content;
