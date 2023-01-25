import React from 'react'
import { useSelector } from 'react-redux';
import CartContainer from '../../components/Cart/CartContainer'
import { CartWrapper } from './CartStyles'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, shippingCost } = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <CartWrapper>
        <h3>Tu carrito</h3>
        <div className='line'></div>
        <div className='cart-info'>
            <CartContainer />
            <div className='prices'>
                <p>Subtotal : ${totalPrice}</p>
                <p>Envío : {shippingCost}</p>
                <hr />
                <p>Total : ${totalPrice + shippingCost}</p>
                <button disabled={cartItems.length ? false : true} onClick={() => navigate('/checkout')}>Pagar</button>
            </div>
        </div>
    </CartWrapper>
  )
}

export default Cart