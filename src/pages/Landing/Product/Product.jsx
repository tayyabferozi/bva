import React from "react";
import { Link } from "react-router-dom";
import { StackIcon, ClockIcon, CheckIcon } from "@primer/octicons-react";

import Section from "../../../components/Section";
import "./Product.scss";

const items = [
  {
    title: "Elektronica o.a. wasmachines, oven en koelkast",
    lots: 233,
    date: "04 Jan, 22:30",
    imgs: ["/assets/imgs/6.jpg", "/assets/imgs/74.jpg", "/assets/imgs/107.jpg"],
  },
  {
    title: "Moonen 83 Mona Lisa.",
    lots: 1,
    date: "04 Jan, 11:00 PM",
    imgs: ["/assets/imgs/1.jpg"],
  },
  {
    title: "Gereedschap, bouwmaterialen, bouwmaterieel, heftrucks en hout",
    lots: 97,
    date: "04 Jan, 23:15",
    imgs: [
      "/assets/imgs/56.jpg",
      "/assets/imgs/64.jpg",
      "/assets/imgs/214.jpg",
    ],
  },
];

const msgs = [
  "Europe's largest auction house",
  "Choose your own price",
  "More than 160.000 lots per month",
];

const Product = () => {
  return (
    <Section id="landing-product">
      <div className="product">
        <div
          className="left"
          style={{
            backgroundImage: "url('/assets/imgs/28251v4.jpg')",
          }}
        ></div>
        <div className="right">
          {items.map((el, idx) => {
            return (
              <Link
                to="/"
                key={"product-item" + idx}
                className="product-item no-dec"
              >
                <div className="text">
                  <div className="top">
                    <h5 className="text-primary-1">{el.title}</h5>
                  </div>

                  <div className="bottom">
                    <div className="d-flex align-items-center gap-10 item">
                      <StackIcon />
                      <div className="fw-500">{el.lots} lots</div>
                    </div>
                    <div className="d-flex align-items-center gap-10 item">
                      <ClockIcon />
                      <div className="fw-500">
                        Closes in <span className="fw-600"> {el.date}</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgs">
                  <div className="imgs-main">
                    {el.imgs.map((el2, idx2) => {
                      return (
                        <img key={"prod-" + idx + idx2} src={el2} alt="img" />
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="marketing-msgs">
        {msgs.map((el, idx) => {
          return (
            <div key={"marketing-msg" + idx} className="item">
              <CheckIcon /> {el}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Product;
