import React from "react";
import { Link } from "react-router-dom";
import { InfoIcon } from "@primer/octicons-react";

import PageSize from "../../../components/PageSize";
import AuctionItemCard3 from "../../../components/AuctionItemCard3";

const items = [
  {
    img: "/assets/imgs/167.jpg",
    lotNumber: "68017-167",
    title: "Neuswiel 60mm automaat profi",
    bid: 75,
    bids: 2,
    time: "Lot is closed",
  },
];

const MyArchive = () => {
  return (
    <div>
      <h4 className="fs-22">Archive</h4>

      <div className="listing-head">
        <div className="left">
          <div className="fs-24">
            <strong>1</strong> lots
          </div>
        </div>

        <PageSize />
      </div>

      <div className="mt-10 px-20 fw-bold">
        <InfoIcon size={16} /> Once the entire auction has closed you can
        checkout the lot(s){" "}
        <Link className="text-primary-1" to="/dashboard/my-purchases">
          here
        </Link>
      </div>

      <div className="mt-50">
        {items.map((el, idx) => {
          return <AuctionItemCard3 key={"my-archive" + idx} {...el} />;
        })}
      </div>
    </div>
  );
};

export default MyArchive;
