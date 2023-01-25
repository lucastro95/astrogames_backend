import React from "react";
import { BurgerButtonWrapper } from "./BurgerButtonStyles";

const BurgerButton = ({ clicked, handleClick }) => {
  return (
    <BurgerButtonWrapper>
      <div
        onClick={handleClick}
        className={`icon nav-icon-1 ${clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerButtonWrapper>
  );
};

export default BurgerButton;
