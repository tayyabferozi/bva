import React from "react";

import Section from "../../../components/Section";
import Button from "../../../components/Button";
import Panel from "./Panel";
import "./ShortExplanation.scss";

const items = [
  {
    title: "Create an account",
    content: [
      "Once you have an account, you can log in to start bidding. In your My environment you will also find your invoices, previously won lots and your favorites.",
    ],
  },
  {
    title: "Bid on your favourite lot via the app or website!",
    content: [
      "You can find all information about the products in the photos and description of the lots. Such as information about the material, size, but also any damage or defects.",
      "For very exclusive lots, it is sometimes necessary to request separate bidding access.",
    ],
  },
  {
    title:
      "Are you the highest bidder when the auction closes? Then you've won the lot!",
    content: [
      "When the auction is closed, you will receive an invoice with an iDeal link.",
      "If a bid is placed in the last 5 minutes, the auction will be extended.",
      "Sometimes a lot must be awarded by the client. If this is the case, you can read this in the auction information.",
    ],
  },
  {
    title:
      "When the auction is closed, you will receive an invoice with an iDeal link.",
    content: [
      "You will receive the invoice by e-mail, and it can be found in your My environment.",
      "Pay within five (5) days to prevent further measures and to receive your lot on time.",
    ],
  },
  {
    title:
      "Most lots are delivered to your home, in the other cases the lot is ready to be picked up. We always state this clearly!",
    content: [
      "You can sometimes pick it up from us in one of the BVA halls.",
      "But it can also be at the location of a partner, for example in the event of bankruptcy.",
    ],
  },
  {
    title:
      "Not completely satisfied after all? In most cases, you can return the lot.",
    content: [
      "For most lots, you can simply return them, just like with other webshops.",
      "To do that you use a return form. The steps you need to take are described under your My deliveries.",
      "Returns are not possible for certain auctions. Read the auction information that you can find at each auction and lot. For example, no return right applies to vehicles and bankruptcies. In such a case, let us know your complaint. We always do our best to find a solution!",
    ],
  },
];

const ShortExplanation = () => {
  return (
    <Section id="how-it-works-short-explanation">
      <h3 className="text-center">Short explanation</h3>

      <div className="accordion">
        {items.map((el, idx) => {
          return (
            <div key={"panel" + idx}>
              <Panel {...el} idx={idx} />
            </div>
          );
        })}
      </div>

      <div className="text-center mt-100">
        <h3>Bidding on real estate?</h3>

        <p className="fs-18">
          Participating in a real estate auction is slightly different. For
          example, legalization through a notary is mandatory, the auction time
          is a lot shorter and bids are always unconditional.
          <br />
          Read all about this in the bidding protocol.
        </p>

        <div className="d-flex justify-content-center mt-20">
          <Button orange>View bidding protocol</Button>
        </div>
      </div>
    </Section>
  );
};

export default ShortExplanation;
