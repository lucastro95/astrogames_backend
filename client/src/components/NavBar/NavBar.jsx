import React, { useState } from "react";
import { NavBarWrapper } from "./NavBarStyles";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsCart4 } from 'react-icons/bs';

import BurgerButton from "./BurgerButton/BurgerButton";
import BgDiv from "./BgDiv/BgDiv";

import swal from "sweetalert"

import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  let width = window.screen.width;

  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogOut = (e) => {
    e.preventDefault()
    if(width < 768) handleClick()

    swal({
      title: "¿Deseas cerrar tu sesión?",
      buttons: true,
      icon: "warning",
    }).then((value) => {
      if (value) {
        dispatch({
          type: "SET_CURRENT_USER",
          payload: null
        })
        swal({
          title: "Cerraste sesión con éxito",
          icon: "success",
        })
        navigate("/");
      }
    });
  }

  return (
    <>
      <NavBarWrapper>
        <div
          style={{
            height: "100%",
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to='/' style={{ height: "100%"}}>
            <img
              src="https://res.cloudinary.com/duafuhu8k/image/upload/v1668786936/astrogames/logo_y6vajp.png"
              alt="logo"
              style={{ height: "100%", marginRight: "1rem" }}
            />
          </Link>
          <h2>ASTROGAMES</h2>
        </div>
        <div className={`links ${clicked ? "active" : ""}`}>
          {width > 768 ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/products">Productos</Link>
              <Link to={currentUser ? "" : "/login"} onClick={currentUser ? handleLogOut : ""}>
                <BsFillPersonFill style={{marginRight:'.5rem', fontSize:'1.5rem'}} />
                {currentUser ? `${currentUser}` : "Iniciar Sesión"}
              </Link>
              <Link to="/cart"><BsCart4 style={{marginRight:'.5rem', fontSize:'1.5rem'}}/><div className="cart">{totalCartItems}</div> Carrito</Link>
            </>
          ) : (
            <>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
              <Link to="/products" onClick={handleClick}>
                Productos
              </Link>
              <Link to={currentUser ? "" : "/login"} onClick={currentUser ? handleLogOut : handleClick}><BsFillPersonFill style={{marginRight:'.5rem'}} />{currentUser ? `${currentUser}` : "Iniciar Sesión"}</Link>
              <Link to="/cart" onClick={handleClick}><BsCart4 style={{marginRight:'.5rem'}}/><div className="cart">{totalCartItems}</div> Carrito</Link>
            </>
          )}
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavBarWrapper>
      <BgDiv clicked={clicked} />
    </>
  );
};

export default NavBar;
