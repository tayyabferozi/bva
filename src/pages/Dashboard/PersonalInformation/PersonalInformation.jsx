import React from "react";

import Button from "../../../components/Button";
import GridContainer from "../../../components/GridContainer";
import Input from "../../../components/Input";
import Radio from "../../../components/Radio";

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

      <div className="personal-info-section">
        <h5>Contact details</h5>

        <div className="form">
          <h5>Account</h5>

          <div className="py-3 mb-2">Client number 4951513</div>

          <div className="mt-20 mb-10">
            <div className="mb-10">Account type</div>

            <div className="d-flex gap-30">
              <Radio name="accountType" label="Customer" />
              <Radio name="accountType" label="Business" />
            </div>
          </div>
        </div>

        <div className="form">
          <h5 className="mb-10">Personal information</h5>

          <div className="mb-10">Title</div>

          <div className="d-flex gap-30">
            <Radio name="title" label="Mr" />
            <Radio name="title" label="Ms" />
          </div>

          <GridContainer className="px-0" rowClassName="gy-10">
            <div className="col-md-4">
              <Input type="text" label="Name *" placeholder="Name" />
            </div>
            <div className="col-md-4">
              <Input type="text" label="Prefix *" placeholder="Prefix" />
            </div>
            <div className="col-md-4">
              <Input type="text" label="Surname *" placeholder="Surname" />
            </div>
            <div className="col-md-4">
              <Input type="text" label="Phone *" placeholder="Phone" />
            </div>
          </GridContainer>
        </div>
        <div className="form">
          <h5 className="mb-10">Address</h5>

          <GridContainer className="px-0" rowClassName="gy-10">
            <div className="col-md-4 col-sm-6">
              <Input
                type="text"
                label="Postal Code *"
                placeholder="Postal Code"
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <Input type="text" label="Number *" placeholder="Number" />
            </div>
            <div className="col-md-4 col-sm-6">
              <Input type="text" label="Addition *" placeholder="Addition" />
            </div>
            <div className="col-md-4 col-sm-6">
              <Input type="text" label="Address *" placeholder="Address" />
            </div>
            <div className="col-md-4 col-sm-6">
              <Input type="text" label="City *" placeholder="City" />
            </div>
            <div className="col-md-4 col-sm-6"></div>
          </GridContainer>

          <Button className="btn-save" green>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
