import React from "react";
import clsx from "clsx";

import "./Tabs.scss";

const Tabs = ({ uniqueKey, items, tabState, setTabState }) => {
  return (
    <div className="tabs">
      {items.map((el, idx) => {
        return (
          <div
            key={uniqueKey + idx}
            className={clsx(
              "tab",
              tabState?.toLowerCase() === el?.toLowerCase() && "active"
            )}
            onClick={() => {
              setTabState(el);
            }}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
