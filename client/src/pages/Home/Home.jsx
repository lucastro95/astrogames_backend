import React from 'react'
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import { HomeWrapper } from './HomeStyles'

const Home = () => {
  return (
    <HomeWrapper>
      <HomeInfo />
      <img src="https://res.cloudinary.com/duafuhu8k/image/upload/v1668786930/astrogames/home-img_laxmao.png" alt="Headphones" />
    </HomeWrapper>
  )
}

export default Home