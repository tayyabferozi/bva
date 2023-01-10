import React from "react";

import "./Radio.scss";

const Radio = ({ label, ...rest }) => {
  return (
    <label className="radio-container">
      {label}
      <input type="radio" {...rest} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Radio;
