import React from "react";
import { BgDivWrapper } from "./BgDivStyles";

const BgDiv = ({ clicked }) => {
  return (
    <BgDivWrapper className={`${clicked ? "active" : ""}`} />
  )
};

export default BgDiv;
