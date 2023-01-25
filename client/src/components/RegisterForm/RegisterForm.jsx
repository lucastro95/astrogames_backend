import React from "react";
import { RegisterFormWrapper } from "./RegisterFormStyles";
import swal from 'sweetalert';

import { Formik } from "formik";
import { useLocation, Link } from "react-router-dom";
import { registerInitialValues } from "../../formik/initialValues";
import { registerValidationSchema } from "../../formik/validationSchema";
import useRedirect from "../../hooks/useRedirect";
import axios from "axios";
import { useDispatch } from 'react-redux'

const RegisterForm = () => {
  const { state } = useLocation();
  const dispatch = useDispatch()
  useRedirect(state?.redirectedFromCheckout ? "/checkout" : "/");

  return (
    <RegisterFormWrapper>
      <h3>Registrarse</h3>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            let res = await axios.post("http://localhost:3001/auth/signup", values)
            dispatch({type: "SET_CURRENT_USER", payload: values.name})
          } catch (error) {
            if (error.response.status === 500) {
              swal({
                title: "El email encontrado ya está en uso",
                text: "Intente nuevamente",
                icon: "warning",
              })
            }
          }
          actions.resetForm();
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
              name="email"
              type="text"
              placeholder="Email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
            />
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
            />
            <button className="form-btn" type="submit">
              Registrarse
            </button>
          </form>
        )}
      </Formik>
      <p>
        ¿Ya tenés una cuenta? Inicia sesión <Link to="/login">acá</Link>
      </p>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
