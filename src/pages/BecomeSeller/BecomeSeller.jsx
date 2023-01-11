import React from "react";

import Hero from "./Hero/Hero";
import FormSection from "./FormSection";
import Banner from "./Banner";
import Why from "./Why";
import ChooseCategory from "./ChooseCategory";
import Partner from "./Partner";
import Footer from "./Footer";
import "./BecomeSeller.scss";

const BecomeSeller = () => {
  return (
    <div id="become-seller">
      <Hero />
      <FormSection />
      <Banner />
      <Why />
      <ChooseCategory />
      <Partner />
      <Footer />
    </div>
  );
};

export default BecomeSeller;
