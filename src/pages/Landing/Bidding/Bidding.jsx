import React from "react";
import Button from "../../../components/Button";

import Section from "../../../components/Section";
import "./Bidding.scss";

const steps = [
  {
    title: "Sign up",
    text: "Sign up for free within 1 minute",
  },
  {
    title: "Bidding",
    text: "Find a lot and place the highest bid",
  },
  {
    title: "Sign up",
    text: "Enjoy your new item and feel like a winner!",
  },
];

const Bidding = () => {
  return (
    <Section id="landing-bidding">
      <div className="bidding-main">
        <h3 className="mb-40">How does bidding work?</h3>

        <div className="steps">
          {steps.map((el, idx) => {
            return (
              <div key={"step-item" + idx} className="step-item">
                <div className="number">{idx + 1}</div>
                <div className="fs-22 fw-700 mb-10">{el.title}</div>
                <p>{el.text}</p>
              </div>
            );
          })}
        </div>

        <div className="btns">
          <Button orange>Sign up for free</Button>
          <Button whiteBlue>Sign up for free</Button>
        </div>
      </div>
    </Section>
  );
};

export default Bidding;
