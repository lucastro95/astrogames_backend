import React from "react";
import { FormWrapper } from "./CheckoutFormStyles";
import swal from "sweetalert";

import { Formik } from "formik";

import * as ordersActions from "../../../redux/orders/orders-actions";
import * as cartActions from "../../../redux/cart/cart-actions";

import {
  checkoutInitialValues,
  checkoutValidationSchema,
} from "../../../formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";

const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <h3>Ingresa tus datos</h3>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async (values) => {
          const orderData = {
            cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
          };
          try {
            await dispatch(ordersActions.createOrder(orderData));
            swal({
              title: "Felicitaciones!",
              text: "Tu orden ha sido creada",
              icon: "success",
            }).then((value) => {
              navigate("/");
            });
            dispatch(cartActions.clearCart());
          } catch (error) {
            swal({
              title: "Error al crear tu orden",
              text: "Intente nuevamente",
              icon: "error",
            });
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Nombre y Apellido"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            />
            <input
              name="cellphone"
              type="text"
              placeholder="Teléfono"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.cellphone}
            />
            <input
              name="location"
              type="text"
              placeholder="Localidad"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.location}
            />
            <input
              name="address"
              type="text"
              placeholder="Dirección"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.address}
            />
            <button type="submit" disabled={!cartItems.length}>
              {props.isSubmitting ? <Loader /> : "Finalizar Pedido"}
            </button>
          </form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default CheckoutForm;
