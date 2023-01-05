import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  SearchIcon,
  PersonIcon,
  MegaphoneIcon,
  ThreeBarsIcon,
} from "@primer/octicons-react";
import clsx from "clsx";

import Button from "../Button";
import Section from "../Section";
import "./Navbar.scss";

const categoryItems = [
  {
    label: "Vehicles",
  },
  {
    label: "Art",
  },
  {
    label: "Housekeeping",
  },
  {
    label: "Sanitary & Wellness",
  },
  {
    label: "Clothing",
  },
  {
    label: "Catering",
  },
  {
    label: "Boats and Yachts",
  },
  {
    label: "Tools",
  },
  {
    label: "Kitches",
  },
  {
    label: "Garden",
  },
  {
    label: "Jewels and Watches",
  },
  {
    label: "Office equipment",
  },
  {
    label: "Bikes & Scooters",
  },
  {
    label: "Consumer electronics",
  },
  {
    label: "Beautiful & healthy",
  },
  {
    label: "Sports & leisure",
  },
  {
    label: "Real estate",
  },
  {
    label: "Office equipment",
  },
];

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <Section id="navbar">
      <div className="navbar-main">
        <div className={clsx("menu-content", isMenuActive && "active")}>
          <div className="items">
            {categoryItems.map((el, idx) => {
              return (
                <Link
                  to="/"
                  className="item no-dec"
                  key={"cateogyr-itsm" + idx}
                >
                  <div>{el.label}</div>
                  <ChevronRightIcon size={18} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="left">
          <Link className="logo" to="/">
            <img src="/assets/vectors/logo-white.svg" alt="logo" />
          </Link>
          <div className="nav-item menu-wrap">
            <div
              className="menu-text"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              Categories
              <ChevronDownIcon
                className={clsx(isMenuActive && "rotate")}
                size="small"
              />
            </div>
          </div>
          <Link className="nav-item">All auctions</Link>
        </div>
        <div className="center">
          <div
            className="d-flex justify-content-center align-items-center d-lg-none"
            onClick={() => setIsSearchActive(!isSearchActive)}
          >
            <div className="fs-16 fw-500 me-2">Search</div>
            <SearchIcon size={16} fill="#fff" />
          </div>
          <div className="search-bar d-none d-lg-block">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <div className="icon">
              <SearchIcon size={24} fill="#f60" />
            </div>
          </div>
        </div>
        <div className="right">
          <Link className="nav-item" to="/customer-service">
            Customer service
          </Link>
          <Button bordered>
            <PersonIcon size={24} />
            Login
          </Button>
        </div>
      </div>
      <div className="navbar-laptop">
        <div className="item">
          <img
            className="logo"
            src="/assets/vectors/logo-white.svg"
            alt="logo-white"
          />
        </div>

        <div className="item">
          <MegaphoneIcon size={24} />

          <div className="text">Auctions</div>
        </div>

        <div className="item">
          <SearchIcon size={24} />

          <div className="text">Search</div>
        </div>

        <div className="item">
          <PersonIcon size={24} />

          <div className="text">Login</div>
        </div>

        <div className="item">
          <ThreeBarsIcon size={24} />

          <div className="text">Menu</div>
        </div>
      </div>
      <div>
        <div
          className={clsx(
            "search-bar d-lg-none",
            isSearchActive ? "d-block" : "d-none"
          )}
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for?"
          />
          <div className="icon">
            <SearchIcon size={24} fill="#f60" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Navbar;
