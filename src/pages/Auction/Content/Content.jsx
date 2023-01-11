import React from "react";

import CollapsibleSection from "../../../components/CollapsibleSection";
import AuctionItemCard from "../../../components/AuctionItemCard";
import GridContainer from "../../../components/GridContainer";
import Checkbox from "../../../components/Checkbox";
import Section from "../../../components/Section";
import Select from "../../../components/Select/Select";
import Option from "../../../components/Select/Option";
import "./Content.scss";

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

const sorts = [
  "First closing",
  "Last closing",
  "Least bids",
  "Most bids",
  "Lowest bids",
  "Highest bids",
  "First lot number",
  "Last lot number",
];

const items = [
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/2.jpg",
    placeholder: "68434-2",
    text: "Bosch Serie 8 VarioPerfect Exclusi...",
    price: 135,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
  {
    img: "/assets/imgs/4.jpg",
    placeholder: "68434-2",
    text: "Siemens iQ300 varioPerfect Wasma...",
    price: 161,
    bids: 24,
    time: "Today at 21:24",
  },
  {
    img: "/assets/imgs/8.jpg",
    placeholder: "68434-2",
    text: "Miele T1 Eco Droger",
    price: 150,
    bids: 19,
    time: "Today at 21:30",
  },
  {
    img: "/assets/imgs/10.jpg",
    placeholder: "68434-2",
    text: "AEG MSB2548C-M Magnetron",
    price: 121,
    bids: 20,
    time: "Today at 21:20",
  },
  {
    img: "/assets/imgs/19.jpg",
    placeholder: "68434-2",
    text: "ETNA FIV760WIT fornuis",
    price: 185,
    bids: 26,
    time: "Today at 21:01",
  },
];

const Content = () => {
  return (
    <Section id="auction-content">
      <GridContainer className="px-0">
        <div className="col-md-3">
          <div className="card">
            <CollapsibleSection title="Categories">
              {categories.map((el, idx) => {
                return (
                  <div key={"category" + idx} className="filter-item">
                    <Checkbox label={`${el.label} (${el.results})`} />
                  </div>
                );
              })}
            </CollapsibleSection>
          </div>
        </div>

        <div className="col-md-9">
          <div className="search-filters-container">
            <div className="fs-20">
              <strong>6</strong> kavels
            </div>
            <div className="filters-list">
              <div className="d-flex align-items-center">
                <div className="me-20">Page size:</div>
                <Select defaultValue="24" className="mb-0">
                  <Option value="24">24</Option>
                  <Option value="48">48</Option>
                  <Option value="96">96</Option>
                </Select>
              </div>
              <div className="filters-list-item d-flex align-items-center sort">
                <div className="sort-form-label me-20">Sort by:</div>
                <Select defaultValue="First closing" className="sort">
                  {sorts.map((el, idx) => {
                    return (
                      <Option value={el} key={"sort" + idx}>
                        {el}
                      </Option>
                    );
                  })}
                </Select>
              </div>
            </div>
          </div>

          <div className="cards my-20">
            <GridContainer>
              {items.map((el, idx) => {
                return (
                  <div
                    key={"auction-category-card" + idx}
                    className="col-lg-4 col-sm-6"
                  >
                    <AuctionItemCard {...el} />
                  </div>
                );
              })}
            </GridContainer>
          </div>
        </div>
      </GridContainer>
    </Section>
  );
};

export default Content;
