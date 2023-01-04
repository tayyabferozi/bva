import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  SearchIcon,
  PersonIcon,
} from "@primer/octicons-react";

import Button from "../Button";
import Section from "../Section";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <Section id="navbar">
      <div className="navbar-main">
        <div className="left">
          <Link className="logo" to="/">
            <img src="/assets/vectors/logo-white.svg" alt="logo" />
          </Link>
          <div className="nav-item menu-wrap">
            <div className="menu-text">
              Categories
              <ChevronDownIcon size="small" />
            </div>
          </div>
          <Link className="nav-item">All auctions</Link>
        </div>
        <div className="center">
          <div className="search-bar">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What are you looking for?"
            />
            <div className="icon">
              <SearchIcon size={24} fill="#006eb3" />
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
    </Section>
  );
};

export default Navbar;
