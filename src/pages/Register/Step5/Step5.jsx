import React from "react";

import Radio from "../../../components/Radio";
import Input from "../../../components/Input";
import GridContainer from "../../../components/GridContainer";

import "./Step5.scss";

const Step2 = () => {
  return (
    <div className="step-2">
      <div>
        <strong className="fs-18">Fill in your address information</strong>
      </div>

      <div className="mt-20 mb-10">
        <Input placeholder="Address Line 1" />
        <Input placeholder="Address Line 2" />
        <Input placeholder="Zip/Postal Code" />
        <Input placeholder="City" />
        <Input placeholder="Country" />
      </div>
    </div>
  );
};

export default Step2;
