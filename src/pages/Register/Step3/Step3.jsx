import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

const Step3 = () => {
  const [value, setValue] = useState();

  return (
    <div className="step-3">
      <div className="mt-10">
        <strong className="fs-18">Request verification code</strong>
      </div>

      <p className="mt-20 mb-20">
        We ask for your phone number for the security of your account. In
        addition, you can easily request a new password with your phone number
      </p>

      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default Step3;
