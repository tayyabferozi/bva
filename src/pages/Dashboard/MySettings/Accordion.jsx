import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";

const Accordion = ({ title, panelHeading, children }) => {
  const [isContentActive, setIsContentActive] = useState(false);

  useEffect(() => {
    if (!panelHeading) setIsContentActive(true);
  }, [panelHeading]);

  return (
    <div className="accordion">
      <h4>{title}</h4>

      {panelHeading && (
        <div
          className="panel-header"
          onClick={() => setIsContentActive(!isContentActive)}
        >
          {panelHeading}
          <ChevronDownIcon className={isContentActive && "rotate"} size={16} />
        </div>
      )}

      {isContentActive && <div className="panel-body">{children}</div>}
    </div>
  );
};

export default Accordion;
