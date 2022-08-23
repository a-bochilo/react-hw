import React from "react";
import ButtonComponent from "../ButtonComponent";
import CardInfo from "../CardInfo";
import ModalComponent from "../ModalComponent";

import "./styles.scss";

const Service = ({ title, subtitle, iconImg, btnLabel, btnClass }) => {
  function addFocusClass(e) {
    const children = e.target.closest(".service").childNodes;
    children.forEach((item) => {
      item.classList.add("focus");
    });
  }

  function removeFocusClass(e) {
    const children = e.target.closest(".service").childNodes;
    children.forEach((item) => {
      item.classList.remove("focus");
    });
  }

  return (
    <div
      className="service"
      onMouseEnter={addFocusClass}
      onMouseLeave={removeFocusClass}
      onBlur={removeFocusClass}
    >
      <CardInfo iconImg={iconImg} title={title} subtitle={subtitle} />

      {/* <ButtonComponent
        btnLabel={btnLabel}
        btnClass={btnClass}
        onClickFunc={() => console.log("click")}
      /> */}
      <ModalComponent
        btnLabel={btnLabel}
        btnClass={btnClass}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
};

export default Service;
