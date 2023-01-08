import React, { useState } from "react";
import clsx from "clsx";
import { TriangleDownIcon } from "@primer/octicons-react";

import "./CollapsibleSection.scss";

const CollapsibleSection = ({ title, className, children, ...rest }) => {
  const [isSectionActive, setIsSectionActive] = useState(true);

  const toggleSectionActive = () => {
    setIsSectionActive(!isSectionActive);
  };

  return (
    <div className={clsx("collapsible-section", className)} {...rest}>
      <div className="collapsible-section__title" onClick={toggleSectionActive}>
        {title}{" "}
        <TriangleDownIcon
          className={clsx("caret", isSectionActive && "rotate")}
          size={20}
        />
      </div>
      {isSectionActive && (
        <div className={"collapsible-section__main"}>{children}</div>
      )}
    </div>
  );
};

export default CollapsibleSection;
