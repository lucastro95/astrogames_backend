import React from 'react'
import { ItemCard } from './CheckoutProductsStyles'

const CheckoutItem = ({ img, name, price, id }) => {
  return (
    <ItemCard>
        <img src={img} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
    </ItemCard>
  )
}

export default CheckoutItem