import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import AboutUs from "./Templates/AboutUs";
import OurServices from "./Templates/OurServices";
import PricingPlan from "./Templates/PricingPlan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/servicing" element={<OurServices />} />
          <Route path="/pricing" element={<PricingPlan />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
