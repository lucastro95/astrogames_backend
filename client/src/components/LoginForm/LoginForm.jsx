import { Link } from "react-router-dom";
import swal from 'sweetalert';

import { LoginFormWrapper } from "./LoginFormStyle";
import { Formik } from "formik";
import axios from 'axios';

import { loginInitialValues, loginValidationSchema } from "../../formik";
import useRedirect from "../../hooks/useRedirect";
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  useRedirect("/");
  const dispatch = useDispatch()

  return (
    <LoginFormWrapper>
      <h3>Iniciar Sesión</h3>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            let res = await axios.put("http://localhost:3001/auth/signin", values )
            console.log(res);
            dispatch({type: "SET_CURRENT_USER", payload: res.data.userFound.name})
          } catch (error) {
            if (error.response.status === 401) {
              swal({
                title: "Contraseña incorrecta",
                text: "Intente nuevamente",
                icon: "error",
              })
            }
            if (error.response.status === 400) {
              swal({
                title: "Usuario no encontrado",
                text: "Intente nuevamente",
                icon: "error",
              })
            }
          }
          actions.resetForm();
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
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
              Iniciar Sesión
            </button>
          </form>
        )}
      </Formik>
      <p>
        ¿No tenés una cuenta? Registrate <Link to="/register">acá</Link>
      </p>
    </LoginFormWrapper>
  );
};

export default LoginForm;
