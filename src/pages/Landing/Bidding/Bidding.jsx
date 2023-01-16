import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

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
        <Slide bottom>
          <h3 className="mb-40">How does bidding work?</h3>
        </Slide>

        <Fade cascade bottom delay={750}>
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
        </Fade>

        <Flip cascade top>
          <div className="btns">
            <Button orange to="/register">
              Sign up for free
            </Button>
            <Button whiteBlue to="/how-bidding-works">
              View game rules
            </Button>
          </div>
        </Flip>
      </div>
    </Section>
  );
};

export default Bidding;
