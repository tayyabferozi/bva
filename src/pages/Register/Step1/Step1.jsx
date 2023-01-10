import React from "react";
import { Link } from "react-router-dom";

import Input from "../../../components/Input";
import Radio from "../../../components/Radio";
import Checkbox from "../../../components/Checkbox/Checkbox";

const Step1 = () => {
  return (
    <div className="step-1">
      <div>
        <strong className="fs-18">Create an account</strong>
      </div>
      <div className="mt-10">
        Do you already have an account?{" "}
        <Link className="text-primary-1" to="/login">
          Log in
        </Link>
      </div>
      <div className="mt-20 mb-10">
        <div className="mb-10">Account type</div>

        <div className="d-flex gap-30">
          <Radio name="accountType" label="Customer" />
          <Radio name="accountType" label="Business" />
        </div>
      </div>
      <Input placeholder="Email" />

      <div className="mt-20 mb-30">
        <Checkbox label="Yes, send me the latest auctions by email. (You can unsubscribe at any time) " />
      </div>

      <Input className="mb-20" type="password" placeholder="Password" />

      <Input type="password" placeholder="Repeat password" />

      <div className="mt-20 mb-30">
        <Checkbox
          label={
            <>
              I agree with the{" "}
              <Link className="text-primary-1" to="/terms">
                terms and conditions
              </Link>
              ,{" "}
              <Link className="text-primary-1" to="/privacy">
                privacy statement
              </Link>{" "}
              and, insofar as necessary, give my permission for BVA Auctions to
              carry out activities for both sellers and buyers
            </>
          }
        />
      </div>
    </div>
  );
};

export default Step1;
