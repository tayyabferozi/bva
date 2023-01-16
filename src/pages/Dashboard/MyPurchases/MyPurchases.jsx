import React, { useState } from "react";
import { InfoIcon } from "@primer/octicons-react";

import PageSize from "../../../components/PageSize";
import Tabs from "../../../components/Tabs/Tabs";
import Button from "../../../components/Button";
import PurchasedItem from "../../../components/PurchasedItem";

const tabItems = ["Ready to Checkout", "Payment Orders", "Invoices"];

const items = [
  {
    img: "/assets/imgs/167.jpg",
    lotNumber: "68017-167",
    title: "Neuswiel 60mm automaat profi",
    price: 75,
    bids: 2,
    time: "Lot is closed",
  },
];

const MyPurchases = () => {
  const [tabState, setTabState] = useState("Ready to Checkout");

  return (
    <div>
      <h4 className="fs-22">My purchases</h4>

      <div className="mt-20">
        <Tabs
          items={tabItems}
          tabState={tabState}
          setTabState={setTabState}
          uniqueKey="my-purchases-tab"
        />
        <div className="listing-head mt-0">
          <div className="left">
            <div className="fs-18">
              <strong>1</strong> lots
            </div>
          </div>

          <PageSize />
        </div>
      </div>

      <div className="mt-10 px-20 fw-bold">
        <InfoIcon className="me-2" size={16} />
        Once the entire auction has closed you can checkout the lot(s) here
      </div>

      <div className="button-wrap">
        <Button green>Checkout all delivery lots</Button>
      </div>

      <div className="items">
        {items.map((el, idx) => {
          return <PurchasedItem key={"my-purchases" + idx} {...el} />;
        })}
      </div>
    </div>
  );
};

export default MyPurchases;
