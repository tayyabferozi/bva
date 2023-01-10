import React from "react";

import Radio from "../../../components/Radio";
import Input from "../../../components/Input";
import GridContainer from "../../../components/GridContainer";

import "./Step2.scss";

const Step2 = () => {
  return (
    <div className="step-2">
      <div>
        <strong className="fs-18">Fill in your personal data</strong>
      </div>

      <div className="mt-20 mb-10">
        <div className="mb-10">Title</div>

        <div className="d-flex gap-30">
          <Radio name="title" label="Mr" />
          <Radio name="title" label="Ms" />
        </div>

        <GridContainer className="mt-20 px-0">
          <div className="col-6">
            <Input className="mb-20" placeholder="Name" />
          </div>

          <div className="col-6">
            <Input placeholder="Prefix" />
          </div>
        </GridContainer>

        <Input placeholder="Surname" />
      </div>
    </div>
  );
};

export default Step2;
