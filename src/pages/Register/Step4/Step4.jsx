import React from "react";

import Button from "../../../components/Button";
import "./Step4.scss";

const Step4 = ({ decStep }) => {
  return (
    <div className="step-4">
      <div className="mt-10">
        <strong className="fs-18">Request verification code</strong>
      </div>

      <p className="mt-20 mb-20">
        SMS has been sent with the code to: +923089402265 (
        <span
          className="c-pointer text-underline"
          onClick={() => {
            decStep();
          }}
        >
          change number
        </span>
        )
      </p>

      <strong>SMS-code</strong>

      <div className="otp">
        <input type="text" pattern="\d{1}" />
        <input type="text" pattern="\d{1}" />
        <input type="text" pattern="\d{1}" />
        <input type="text" pattern="\d{1}" />
      </div>

      <Button green className="w-100 justify-content-center">
        Resend code
      </Button>
      <p className="fs-14 mt-2">
        Still haven&apos;t received your SMS code? Read here what might be going
        wrong
      </p>
    </div>
  );
};

export default Step4;
