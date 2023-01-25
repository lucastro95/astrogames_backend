import React from 'react'
import CheckoutItem from './CheckoutItem'
import { PricesWrapper, ProductsWrapper } from './CheckoutProductsStyles'

const CheckoutProducts = ({ cartItems, shippingCost, price }) => {
  return (
    <ProductsWrapper>
      {cartItems.length ? (
          cartItems.map(item => <CheckoutItem key={item.id} {...item} />)
        ) : (
          <p>No hay productos para mostrar</p>
      )}
      <PricesWrapper>
        <p>Subtotal: ${price}</p>
        <p>Envío: ${shippingCost}</p>
        <div></div>
        <p>Total: ${price + shippingCost}</p>
      </PricesWrapper>
    </ProductsWrapper>
  )
}

export default CheckoutProducts