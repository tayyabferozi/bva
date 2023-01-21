import React, { useState } from "react";
import { ChevronRightIcon } from "@primer/octicons-react";
import { ArrowRightIcon, ArrowLeftIcon } from "@primer/octicons-react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import Section from "../../components/Section";
import "./Register.scss";
import Step1 from "./Step1/Step1";
import Button from "../../components/Button";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

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
  {
    label: "Address",
  },
];

const Register = () => {
  const [stepState, setStepState] = useState(1);

  const incStep = () => {
    setStepState((prevState) => {
      if (prevState <= steps.length) return ++prevState;
      else return steps.length;
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
        {stepState < steps.length ? (
          <>
            <div className="steps-wrap">
              {steps.map((el, idx) => {
                return (
                  <div
                    key={"step-" + idx}
                    className={clsx(
                      "step-item",
                      stepState >= idx + 1 && "active"
                    )}
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
            {stepState === 5 && <Step5 decStep={decStep} />}

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
                ) : stepState === 5 ? (
                  <>Finish</>
                ) : (
                  <> To {steps[stepState]?.label}</>
                )}
                <ArrowRightIcon className="ms-10" size={24} />
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="congrats">
              <img src="/assets/imgs/check-mark.png" alt="checkmark" />

              <h1 className="mb-10 mt-20">Congratulations</h1>

              <p className="mb-1">Thank you for signing up</p>

              <p>
                <Link className="text-primary-1" to="/dashboard">
                  Go to dashboard
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default Register;
