import React, { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";

const Panel = ({ idx, title, content }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="panel">
      <div
        className="panel-header"
        onClick={() => setIsMenuActive(!isMenuActive)}
      >
        <div className="index">{idx + 1}</div>
        <div className="title">
          {title}{" "}
          <ChevronDownIcon className={isMenuActive && "rotate"} size={16} />
        </div>
      </div>
      {isMenuActive && (
        <div className="panel-body">
          <ul>
            {content.map((el2, idx2) => {
              return <li key={"content" + idx2}>{el2}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Panel;
