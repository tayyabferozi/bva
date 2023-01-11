import React from "react";

import Button from "../../../components/Button";
import Section from "../../../components/Section";
import "./ChooseCategory.scss";

const ChooseCategory = () => {
  return (
    <Section id="become-seller-category" className="py-20 text-center">
      <h2 className="text-grey-1">Choose your category!</h2>

      <div className="d-flex justify-content-center">
        <Button className="mt-20" orange>
          Choose now
        </Button>
      </div>
    </Section>
  );
};

export default ChooseCategory;
