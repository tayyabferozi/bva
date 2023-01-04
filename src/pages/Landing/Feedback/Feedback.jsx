import React from "react";

import Section from "../../../components/Section";
import "./Feedback.scss";

const Feedback = () => {
  return (
    <Section id="landing-feedback">
      <div className="feedback-main">
        <div>
          <img
            className="feedback-company-logo"
            src="/assets/vectors/logo-feedback-company.svg"
            alt="feedbackcompany"
          />
        </div>
        <div className="rating-text">
          <h5>We are rated with an</h5>
          <div className="rating">8</div>
          <h5>by 20.558 people</h5>
        </div>
        <div>
          <img
            className="thuiswinkel-logo"
            src="/assets/vectors/logo-thuiswinkel-waarborg.svg"
            alt="thuiswinkel"
          />
        </div>
      </div>
    </Section>
  );
};

export default Feedback;
