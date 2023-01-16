import React, { useState } from "react";
import { ChevronRightIcon } from "@primer/octicons-react";
import clsx from "clsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@primer/octicons-react";

import Section from "../../components/Section";
import "./Register.scss";
import Step1 from "./Step1/Step1";
import Button from "../../components/Button";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const steps = [
  {
    label: "Account",
  },
  {
    label: "Personal Details",
  },
  {
    label: "Verification",
  },
  {
    label: "Verification",
  },
];

const Register = () => {
  const [stepState, setStepState] = useState(1);

  const incStep = () => {
    setStepState((prevState) => {
      if (prevState <= 3) return ++prevState;
      else return 4;
    });
  };

  const decStep = () => {
    setStepState((prevState) => {
      if (prevState > 1) return --prevState;
      else return 1;
    });
  };

  return (
    <Section id="register">
      <div className="register-main">
        <div className="steps-wrap">
          {steps.map((el, idx) => {
            return (
              <div
                key={"step-" + idx}
                className={clsx("step-item", stepState >= idx + 1 && "active")}
              >
                <div className="num">{idx + 1}</div>
                {stepState === idx + 1 && (
                  <div className="label">{el.label}</div>
                )}
                <ChevronRightIcon size={24} fill={"rgba(0, 0, 0, 0.54)"} />
              </div>
            );
          })}
        </div>

        {stepState === 1 && <Step1 />}
        {stepState === 2 && <Step2 />}
        {stepState === 3 && <Step3 />}
        {stepState === 4 && <Step4 decStep={decStep} />}

        <div className="d-flex flex-column-reverse flex-sm-row my-20">
          {stepState !== 1 && (
            <Button className="justify-content-center" onClick={decStep}>
              <ArrowLeftIcon className="me-10" size={24} />
              Back
            </Button>
          )}
          <Button className="" orange onClick={incStep}>
            {stepState === 3 ? (
              <>Send me the code</>
            ) : stepState === 4 ? (
              <>Verify and to address</>
            ) : (
              <> To {steps[stepState]?.label}</>
            )}
            <ArrowRightIcon className="ms-10" size={24} />
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Register;
