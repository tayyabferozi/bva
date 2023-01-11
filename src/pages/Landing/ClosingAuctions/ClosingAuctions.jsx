import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@primer/octicons-react";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import "./ClosingAuctions.scss";
import AuctionItemCard2 from "../../../components/AuctionItemCard2";

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
];

const ClosingAuctions = () => {
  return (
    <Section id="closing-auctions">
      <h3>
        These auctions will close soon{" "}
        <Link
          className="text-primary-1 ms-50 fw-500 d-inline-flex align-items-center"
          to="/"
        >
          View all auctions <ArrowRightIcon className="ms-10" size={26} />
        </Link>{" "}
      </h3>

      <div className="items mt-30">
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

export default ClosingAuctions;
