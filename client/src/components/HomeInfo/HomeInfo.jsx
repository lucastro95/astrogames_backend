import React from "react";
import { Link } from "react-router-dom";
import { HomeInfoWrapper } from "./HomeInfoStyle";

const HomeInfo = () => {
  return (
    <HomeInfoWrapper>
      <h2>¡Nuestros mejores productos para vos!</h2>
      <p>Encontrá los mejores accesorios para tu setup en nuestro catálogo</p>
      <Link to="products">Ver productos</Link>
    </HomeInfoWrapper>
  );
};

export default HomeInfo;
