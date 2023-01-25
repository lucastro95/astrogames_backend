import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/Checkout/Form/CheckoutForm";
import CheckoutProducts from "../../components/Checkout/Products/CheckoutProducts";
import { CheckoutWrapper } from "./CheckoutStyles";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CheckoutWrapper>
      <CheckoutForm
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
      />
      <CheckoutProducts
        cartItems={cartItems}
        shippingCost={shippingCost}
        price={price}
      />
    </CheckoutWrapper>
  );
};

export default Checkout;
