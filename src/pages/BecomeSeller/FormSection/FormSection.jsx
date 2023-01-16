import React from "react";

import Section from "../../../components/Section";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import GridContainer from "../../../components/GridContainer";
import "./FormSection.scss";

const features = [
  {
    big: "6,000,000",
    small: "visits monthly",
  },
  {
    big: "2,400,000",
    small: "registered bidders",
  },
  {
    big: "160,000",
    small: "lots offered per month",
  },
  {
    big: "121",
    small: "countries with active bidders",
  },
];

const cards = [
  {
    img: "/assets/imgs/hospitality.png",
    name: "Hospitality",
  },
  {
    img: "/assets/imgs/caravan.png",
    name: "Caravan",
  },
  {
    img: "/assets/imgs/boats.png",
    name: "Boats",
  },
  {
    img: "/assets/imgs/return-goods.jpg",
    name: "Return Goods",
  },
  {
    img: "/assets/imgs/living.jpg",
    name: "Living & Sleeping",
  },
  {
    img: "/assets/imgs/termination.png",
    name: "Voluntary Business Termination",
  },
  {
    img: "/assets/imgs/insolvency.png",
    name: "Isolvency",
  },
  {
    img: "/assets/imgs/real-estate.png",
    name: "Real Estate",
  },
  {
    img: "/assets/imgs/others.png",
    name: "Others",
  },
];

const FormSection = () => {
  return (
    <Section id="become-seller-form-section">
      <div className="main">
        <div className="left">
          <div className="top">
            {/* <img src="/assets/imgs/logo.png" alt="logo" /> */}
            Logo
            {features.map((el, idx) => {
              return (
                <div className="item" key={"form-left-text-item" + idx}>
                  <div className="big">{el.big}</div>
                  <div className="small">{el.small}</div>
                </div>
              );
            })}
          </div>

          <div className="text">
            <h2>Become a seller at BVA Auctions</h2>

            <p>
              As the European market leader in online auctions, we are experts
              in business auctions in various categories.
            </p>

            <p>
              Do you want to successfully sell your new, used, or returned
              products successfully for the maximum value? <br />
              Online auction house BVA Auctions is happy to help. We have the
              solution for your (out-of-season) stock or your company inventory
              and increase your customer base with 2.4 million potential buyers.
              Win-win!
            </p>

            <p className="mt-50">
              Online auctioning is not only for bankrupt companies, it is so
              much more. We are also your ideal partner if you are looking for a
              new/alternative sales channel for your surplus trading stock or
              machines.
            </p>

            <p>
              Request an intake interview via the contact form, or click here
              below on the category which is most interesting to you.
            </p>

            <p className="mb-0">
              <strong>Note:</strong> It is only possible to submit an auction
              if:
            </p>
            <p className="mb-0">- You have a Chamber of Commerce number</p>
            <p className="mb-0">
              - Your first auction has a minimum (estimated) value of €2,000,00.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <p>
              Leave your information here and we will contact you within 24
              hours
            </p>

            <Input label="Name *" />
            <Input label="E-mail Address *" />
            <Input label="Company *" />
            <Input label="Phone number *" />
            <Input label="Notes *" />

            <Button className="w-100 justify-content-center" orange>
              SEND
            </Button>
          </div>
        </div>
      </div>

      <div className="category-cards">
        <GridContainer className="px-0">
          {cards.map((el, idx) => {
            return (
              <div key={"card" + idx} className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="name">{el.name}</div>
                  <img src={el.img} alt={el.name} />
                </div>
              </div>
            );
          })}
        </GridContainer>
      </div>
    </Section>
  );
};

export default FormSection;
