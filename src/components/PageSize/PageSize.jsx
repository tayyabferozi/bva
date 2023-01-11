import React from "react";

import Select from "../Select/Select";
import Option from "../Select/Option";

const PageSize = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="me-20">Page size:</div>
      <Select defaultValue="24" className="mb-0">
        <Option value="24">24</Option>
        <Option value="48">48</Option>
        <Option value="96">96</Option>
      </Select>
    </div>
  );
};

export default PageSize;
