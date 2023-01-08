import React from "react";

import Button from "../../../../components/Button";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import CollapsibleSection from "../../../../components/CollapsibleSection/CollapsibleSection";

import "./Filters.scss";

const categories = [
  {
    label: "Cars",
    results: 583,
  },
  {
    label: "Motorcycles and Quads",
    results: 44,
  },
  {
    label: "Vehicles",
    results: 44,
  },
  {
    label: "Trailers",
    results: 14,
  },
  {
    label: "Camping vehicles",
    results: 13,
  },
];

const brands = [
  {
    label: "Alfa Romeo",
    results: 5,
  },
  {
    label: "Alpina",
    results: 3,
  },
  {
    label: "Audi",
    results: 38,
  },
  {
    label: "Bentley",
    results: 5,
  },
  {
    label: "BMW",
    results: 56,
  },
];

const delivery = [
  { label: "Pickup", results: 686 },
  { label: "Home delivery", results: 13 },
];

const condition = [
  { label: "Graded", results: 516 },
  { label: "Used", results: 90 },
  { label: "New", results: 10 },
];

const pickupLocation = [
  { label: "Amersfoort", results: 119 },
  { label: "Amsterdam", results: 20 },
  { label: "Apeldoom", results: 59 },
  { label: "Born", results: 57 },
  { label: "Boxmeer", results: 39 },
];

const countries = [
  { label: "Netherlands", results: 622 },
  { label: "Belgium", results: 77 },
];

const auctions = [
  { label: "Personen- en bedrijfsauto’s te...", results: 109 },
  { label: "Passenger and commercial vehic...", results: 106 },
  { label: "Classic Cars, Youngtimers & Da...", results: 72 },
  { label: "Personenauto's en Bedrijfsauto...", results: 68 },
  { label: "Sportscars, Classiccars, Daily...", results: 57 },
];

const Filters = ({ setShowFilters }) => {
  return (
    <div id="category-results-filters">
      <div className="collapsible-section">
        <div className="title">
          <CollapsibleSection title="Categories">
            {categories.map((el, idx) => {
              return (
                <div key={"category" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Brand">
            {brands.map((el, idx) => {
              return (
                <div key={"brand" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Delivery">
            {delivery.map((el, idx) => {
              return (
                <div key={"delivery" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Condition">
            {condition.map((el, idx) => {
              return (
                <div key={"condition" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Pickup location">
            {pickupLocation.map((el, idx) => {
              return (
                <div key={"pickupLocation" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Country">
            {countries.map((el, idx) => {
              return (
                <div key={"countries" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>

          <CollapsibleSection title="Auction">
            {auctions.map((el, idx) => {
              return (
                <div key={"countries" + idx} className="filter-item">
                  <Checkbox label={`${el.label} (${el.results})`} />
                </div>
              );
            })}
          </CollapsibleSection>
        </div>

        <Button orange onClick={() => setShowFilters(false)}>
          See 699 lots
        </Button>
      </div>
    </div>
  );
};

export default Filters;
