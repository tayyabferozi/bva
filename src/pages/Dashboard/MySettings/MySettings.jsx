import React from "react";
import { Link } from "react-router-dom";
import { CheckboxIcon, SearchIcon } from "@primer/octicons-react";

import Accordion from "./Accordion";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import "./MySettings.scss";
import Switch from "../../../components/Switch";

const MySettings = () => {
  return (
    <div id="dashboard-my-settings">
      <h4 className="fs-22 mb-10">Settings</h4>

      <Accordion title="My saved searches" panelHeading="Your saved searches">
        <div className="">
          An email with the latest offers based on saved search terms will be
          sent every week to: yaslem415@gmail.com.
          <Link
            to="/dashboard/personal-information"
            className="d-block text-primary-1 mt-1"
          >
            Change e-mail address
          </Link>
        </div>
        <div className="saved-searches-well">
          <div className="fs-14 fw-bold">
            You don't have any saved searches yet
          </div>
          <div className="mt-2">
            When you save a search term on the search page, we will send you an
            e-mail when new lots are available
          </div>
        </div>

        <div className="fs-16">You can save up to 10 searches</div>
        <div>
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <SearchIcon size={20} fill="" />
          </div>
        </div>
      </Accordion>

      <Accordion
        title="1-click bidding"
        panelHeading="With 1 click place a bid from the 'My lots' page"
      >
        <div className="">
          If you activate "1-click bidding", you can place a bid on lots in your{" "}
          <Link to="/dashboard/my-lots"> My lots</Link> overview with one click.
          You will <strong>not</strong> see a confirmation screen and your bid
          will be placed immediately, so you can bid on multiple lots in quick
          succession.
        </div>
        <div className="explanation-wrapper">
          <Button orange className="one-click">
            {" "}
            <div className="one-click">1click</div> Place Bid
          </Button>
          <div className="mt-10 fs-10">
            Example of the bidding button when 1-click bidding is activated
          </div>
        </div>

        <div className="mt-3 text-primary-1">
          Please note: a "1-click bidding" bid is final
        </div>

        <div className="my-10">
          <Checkbox label="Use 1-click bidding " />
        </div>

        <Button className="btn-save" green>
          Save
        </Button>
      </Accordion>

      <Accordion
        title="My e-mail notifications"
        panelHeading="Set which notifications you want to receive by email"
      >
        <div className="notification-item">
          <div>
            <div className="header">Search</div>
            <div className="">
              Receive a weekly overview of new lots based on your saved searches
            </div>
          </div>
          <Switch />
        </div>
        <div className="notification-item">
          <div>
            <div className="header">Seller review</div>
            <div className="">Receive a notification to review a seller</div>
          </div>
          <Switch />
        </div>
        <div className="notification-item">
          <div>
            <div className="header">Search</div>
            <div className="">
              Receive a weekly overview of new lots based on your saved searches
            </div>
          </div>
          <Switch />
        </div>
        <div className="notification-item">
          <div>
            <div className="header">Review</div>
            <div className="">
              Receive a notification to review BVA Auctions
            </div>
          </div>
          <Switch />
        </div>
        <div className="notification-item">
          <div>
            <div className="header">Auction status - Favourite opened</div>
            <div className="">
              Receive a notification when your favorite lot opens
            </div>
          </div>
          <Switch />
        </div>
        <div className="notification-item">
          <div>
            <div className="header">Auction status - Favorite closed</div>
            <div className="">
              Receive a notification when your favorite lot closes
            </div>
          </div>
          <Switch />
        </div>
      </Accordion>

      <Accordion title="Legalization">
        I want to legalize my account for BVA Auctions
      </Accordion>
    </div>
  );
};

export default MySettings;
