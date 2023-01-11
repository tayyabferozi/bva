import React from "react";
import Button from "../../../components/Button";
import GridContainer from "../../../components/GridContainer";
import Input from "../../../components/Input";

import "./PersonalInformation.scss";

const PersonalInformation = () => {
  return (
    <div id="dashboard-personal-info">
      <h4 className="fs-22">Personal Information</h4>

      <div className="personal-info-section">
        <h5>Login credentials</h5>

        <div className="form">
          <h5>Change e-mail</h5>

          <div className="py-3 mb-2">yaslem415@gmail.com</div>

          <GridContainer className="px-0">
            <div className="col-md-6">
              <Input placeholder="New e-email address" />
            </div>
            <div className="col-md-6">
              Pay attention! The final change of email address must be confirmed
              by email sent to the new email address.
            </div>
          </GridContainer>

          <Button green>Save</Button>
        </div>

        <div className="form">
          <h5 className="mb-10">Change password</h5>

          <GridContainer className="px-0" rowClassName="gy-10">
            <div className="col-md-6">
              <Input type="password" placeholder="Current password" />
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <Input type="password" placeholder="New password" />
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <Input type="password" placeholder="Repeat new password" />
            </div>
          </GridContainer>

          <Button green>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
