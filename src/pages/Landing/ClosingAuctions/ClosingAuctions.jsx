import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  StackIcon,
  ClockIcon,
  LocationIcon,
} from "@primer/octicons-react";

import Section from "../../../components/Section";
import "./ClosingAuctions.scss";
import GridContainer from "../../../components/GridContainer";

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
        <GridContainer noPx0>
          {items.map((el, idx) => {
            return (
              <div key={"closing-auc" + idx} className="col-md-6">
                <Link to="/" className="item no-dec">
                  <h5 className="text-primary-1 d-lg-none d-block">
                    {el.text}
                  </h5>

                  <div className="item-main">
                    <div className="left">
                      <h5 className="text-primary-1 d-lg-block d-none">
                        {el.text}
                      </h5>
                      <div className="info">
                        <div className="info-item">
                          <StackIcon size={20} />
                          <div className="text">{el.lots} lots</div>
                        </div>
                        <div className="info-item">
                          <LocationIcon size={20} />
                          <div className="text">{el.location}</div>
                        </div>
                        <div className="info-item">
                          <ClockIcon size={20} />
                          <div className="text fw-500">
                            Closes in <span className="fw-600"> {el.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <img src={el.img} alt={el.text} />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </GridContainer>
      </div>
    </Section>
  );
};

export default ClosingAuctions;
