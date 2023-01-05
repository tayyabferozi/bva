import React from "react";
import { Link } from "react-router-dom";

import GridContainer from "../../../components/GridContainer";
import Section from "../../../components/Section";
import "./HighlightedCategories.scss";

const categories = [
  {
    img: "/assets/imgs/art.png",
    label: "Art",
  },
  {
    img: "/assets/imgs/cars.png",
    label: "Automotive",
  },
  {
    img: "/assets/imgs/realestate.png",
    label: "Real estate",
  },
];

const HighlightedCategories = () => {
  return (
    <Section id="landing-highlighted-categories">
      <h3 className="pt-20 mb-10">Highlighted Categories</h3>

      <div className="category-items">
        {/* <GridContainer> */}
        {categories.map((el, idx) => {
          return (
            <div
              key={"highlighted-category-item" + idx}
              className="category-item"
            >
              <Link to="/" className="card no-dec">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url('${el.img}')`,
                  }}
                ></div>
                <div className="card-text text-center text-primary-1">
                  <h4>{el.label}</h4>
                </div>
              </Link>
            </div>
          );
        })}
        {/* </GridContainer> */}
      </div>
    </Section>
  );
};

export default HighlightedCategories;
