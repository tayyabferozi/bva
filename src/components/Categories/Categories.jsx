import React from "react";

import Section from "../Section";
import "./Categories.scss";

const categories = [
  { id: 1, icon: "/assets/vectors/icons/cars.svg", name: "Vehicles" },
  { id: 2, icon: "/assets/vectors/icons/bikes.svg", name: "Bikes & Scooters" },
  { id: 3, icon: "/assets/vectors/icons/art.svg", name: "Art" },
  { id: 4, icon: "/assets/vectors/icons/tools.svg", name: "Tools" },
  {
    id: 5,
    icon: "/assets/vectors/icons/consumer-electronics.svg",
    name: "Consumer Electronics",
  },
  {
    id: 6,
    icon: "/assets/vectors/icons/home-furnishings.svg",
    name: "Home furnishings",
  },
  {
    id: 7,
    icon: "/assets/vectors/icons/jewels.svg",
    name: "Jewels and Watches",
  },
  { id: 8, icon: "/assets/vectors/icons/catering.svg", name: "Catering" },
  { id: 9, icon: "/assets/vectors/icons/real-estate.svg", name: "Real Estate" },
  {
    id: 10,
    icon: "/assets/vectors/icons/all-categories.svg",
    name: "All cat.",
  },
];

const Categories = () => {
  return (
    <Section id="auction-categories">
      <div className="auction-main">
        {categories.map((el, idx) => {
          return (
            <div key={"category" + el.id} className="category-item">
              <img src={el.icon} alt={el.name} />
              <div className="text">{el.name}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Categories;
