import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundWrapper } from './NotFoundStyles'

const NotFound = () => {
  return (
    <NotFoundWrapper>
        <img src="https://res.cloudinary.com/duafuhu8k/image/upload/v1668786926/astrogames/404-img_wcjrp0.png" alt="Not Found Page" />
        <h2>¡Upss!</h2>
        <p>Parece que te perdiste</p>
        <Link to='/'>Volver a la página principal</Link>
    </NotFoundWrapper>
  )
}

export default NotFound