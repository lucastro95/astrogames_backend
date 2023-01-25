import React from "react";
import { ProductoCard } from "./ProductosStyles";

import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';

const Producto = ({ name, price, img, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductoCard>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
      <button onClick={() =>
            dispatch(cartActions.addToCart({ img, name, price, id }))
          }>Comprar</button>
    </ProductoCard>
  );
};

export default Producto;
