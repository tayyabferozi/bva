import React from "react";

import "./PurchasedItem.scss";

const PurchasedItem = ({ img, title, lotNumber, price }) => {
  return (
    <div className="purchased-item">
      <div className="lot-img">
        <img src={img} alt={title} />
      </div>
      <div className="lot-text">
        <div className="fs-12">{lotNumber}</div>
        <div className="my-1 text-primary-1 fs-18 fw-bold">{title}</div>
        <div className="price fw-bold">€{price}</div>
      </div>
    </div>
  );
};

export default PurchasedItem;
