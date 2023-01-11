import React from "react";

import "./Switch.scss";

const Switch = ({ label, ...rest }) => {
  return (
    <label class="switch">
      <input type="checkbox" {...rest} />
      <span class="slider round"></span>
    </label>
  );
};

export default Switch;
