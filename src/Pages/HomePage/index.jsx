import React from "react";
import AboutUs from "../../Templates/AboutUs";
import Banner from "../../Templates/Banner";
import Blog from "../../Templates/Blog";
import OurServices from "../../Templates/OurServices";
import PricingPlan from "../../Templates/PricingPlan";
import Team from "../../Templates/Team";

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurServices />
      <PricingPlan />
      <Team />
      <Blog />
    </>
  );
};

export default HomePage;
