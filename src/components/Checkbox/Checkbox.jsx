import React from "react";

import "./Checkbox.scss";

const Checkbox = ({ label, ...rest }) => {
  return (
    <label className="checkbox-container">
      {label}
      <input type="checkbox" {...rest} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
