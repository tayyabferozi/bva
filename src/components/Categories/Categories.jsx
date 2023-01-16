import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faMotorcycle,
  faPalette,
  faScrewdriverWrench,
  faPlugCircleMinus,
  faCouch,
  faRing,
  faHouse,
  faEllipsis,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import Section from "../Section";
import "./Categories.scss";

const categories = [
  {
    id: 1,
    icon: faCarSide,
    name: "Vehicles",
  },
  { id: 2, icon: faMotorcycle, name: "Bikes & Scooters" },
  { id: 3, icon: faPalette, name: "Art" },
  { id: 4, icon: faScrewdriverWrench, name: "Tools" },
  {
    id: 5,
    icon: faPlugCircleMinus,
    name: "Consumer Electronics",
  },
  {
    id: 6,
    icon: faCouch,
    name: "Home furnishings",
  },
  {
    id: 7,
    icon: faRing,
    name: "Jewels and Watches",
  },
  { id: 8, icon: faUtensils, name: "Catering" },
  { id: 9, icon: faHouse, name: "Real Estate" },
  {
    id: 10,
    icon: faEllipsis,
    name: "All cat.",
  },
];

const Categories = ({ setIsMenuActive }) => {
  return (
    <Section id="auction-categories">
      <Fade bottom cascade>
        <div className="auction-main">
          {categories.map((el, idx) => {
            return (
              <div
                key={"category" + idx}
                className="category-item"
                onClick={() => {
                  if (el.name.includes("All cat")) {
                    setIsMenuActive(true);
                  }
                }}
              >
                <FontAwesomeIcon icon={el.icon} size="xl" />
                <div className="text">{el.name}</div>
              </div>
            );
          })}
        </div>
      </Fade>
    </Section>
  );
};

export default Categories;
