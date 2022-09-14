import React from "react";
import SectionTitle from "../../Components/SectionTitle";

import { CONTACT_DATA } from "./constants";

import "./styles.scss";

const ContactUs = () => {
  return (
    <section className="blog-section pt-5">
      <div className="blog-section__container">
        <SectionTitle
          title={CONTACT_DATA.sectionTitle.title}
          subtitle={CONTACT_DATA.sectionTitle.subtitle}
          titleClass={CONTACT_DATA.sectionTitle.titleClass}
        />
        <div className="row pt-5 pb-5">
         
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
