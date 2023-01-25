import React from "react";
import { CartCard } from "./CartStyles";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";

import * as cartActions from "../../redux/cart/cart-actions";

const CartItem = ({ img, name, price, quantity, id }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <CartCard>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <div>
        <button
          onClick={() => dispatch(cartActions.removeFromCart(id))}
          disabled={!cartItems.length}
        >
          {quantity === 1 ? <ImBin /> : '-' }
          
        </button>
        <p>{quantity}</p>
        <button
          onClick={() =>
            dispatch(cartActions.addToCart({ img, name, price, id }))
          }
        >
          +
        </button>
      </div>
      <p>${price}</p>
    </CartCard>
  );
};

export default CartItem;
