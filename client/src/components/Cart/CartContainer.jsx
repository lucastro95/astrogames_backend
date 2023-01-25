import React from "react";
import CartItem from "./CartItem";
import { CartWrapper } from "./CartStyles";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  return (
    <CartWrapper>
      {totalCartItems === 0 ? (
        <h4>No hay productos</h4>
      ) : (
        <>
          {cartItems.map((item) => (
            <>
              <CartItem key={item.id} {...item} />
              <div key={Date.now()} className="line" style={{ width: "100%" }}></div>
            </>
          ))}
        </>
      )}
      {totalCartItems === 0 && <Link to='/products'>Ver Productos</Link>}
    </CartWrapper>
  );
};

export default CartContainer;
