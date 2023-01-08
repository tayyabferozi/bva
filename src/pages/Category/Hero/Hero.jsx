import React from "react";
import { CheckIcon } from "@primer/octicons-react";
import clsx from "clsx";

import Section from "../../../components/Section";
import GridContainer from "../../../components/GridContainer";

import "./Hero.scss";

const services = [
  "More than 160,000 lots",
  "24/7 customer-service",
  "Safe bidding and payment",
];

const Hero = () => {
  return (
    <Section id="category-hero">
      <div className="hero-main">
        <div className="banner">
          <GridContainer className="px-0">
            <div className="col-md-5">
              <div className="message">
                <div className="fs-22 fw-500 mb-10">Vehicles</div>
                <p className="fs-16">New and used cars, find the best offer.</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="marketing-message">
                {services.map((el, idx) => {
                  return (
                    <div
                      className={clsx(
                        "msg",
                        idx === 0 && "d-xl-block d-md-none d-block"
                      )}
                      key={"marketing-msg" + idx}
                    >
                      <CheckIcon className="me-3" size={16} fill="#090" />
                      {el}
                    </div>
                  );
                })}
              </div>
            </div>
          </GridContainer>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
