import React from "react";

import Section from "../../../components/Section";
import "./Why.scss";

const features = [
  {
    img: "/assets/imgs/auction.png",
    title: "Maximum Value",
    text: "Each product deserves the maximum yield. That's what makes auctioning interesting. Our motivation is to find the perfect buyer with the right resources.",
  },
  {
    img: "/assets/imgs/global.png",
    title: "Global Reach",
    text: "Worldwide, buyers from 121 countries bid on our platform. Your potential buyer is also among them. We make sure he sees your products. ",
  },
  {
    img: "/assets/imgs/simple.png",
    title: "Simple and fast",
    text: "Our website is easy and user-friendly. We love it. Both in offering lots and bidding on them.",
  },
  {
    img: "/assets/imgs/quick.png",
    title: "Quick cash",
    text: "The turnover rate of the auction principle is high, liquidating the stock  within a few weeks. ",
  },
  {
    img: "/assets/imgs/sustainable.png",
    title: "Sustainable",
    text: "Together we will find a new owner for your products. Each product has value!",
  },
  {
    img: "/assets/imgs/technology.png",
    title: "Technology",
    text: "Being ahead of the market is our goal. Our fascination with a high tech platform goes a long way and remains a constant focus.",
  },
];

const Why = () => {
  return (
    <Section id="become-seller-why">
      <h2 className="text-grey-1">Why Auctioning?</h2>

      <div className="features">
        {features.map((el, idx) => {
          return (
            <div className="feature-item" key={"why-feature" + idx}>
              <div className="img">
                <img src={el.img} alt={el.title} />
              </div>
              <div className="text">
                <div className="title">{el.title}</div>
                <p>{el.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Why;
