import React from "react";

import "./DownloadBtns.scss";

const DownloadBtns = () => {
  return (
    <div className="download-btns">
      <a href="www.google.com">
        <img
          src="/assets/vectors/icons/play_store_badge-en.svg"
          alt="play-store"
        />
      </a>
      <a href="www.google.com">
        <img
          src="/assets/vectors/icons/app_store_badge-en.svg"
          alt="app-store"
        />
      </a>
    </div>
  );
};

export default DownloadBtns;
