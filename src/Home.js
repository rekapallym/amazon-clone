import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjgwNDI1YjYt/YjgwNDI1YjYt-NTM5YjliMDYt-w3000._CB661635189_.jpg'
          className='home__image'
        />

        <div className='home_row'>
          <Product
            id='1'
            title='One 5 foot Artificial Silk Bird of Paradise Palm Tree Potted Plant'
            price={69.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51tYx9tMVzL._AC_SL1000_.jpg'
            rating={5}
          />
          <Product
            id='2'
            title='Apple iPhone 11 [128GB, Purple] + Carrier Subscription [Cricket Wireless]'
            price={1099.99}
            image='https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY436_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            id='3'
            title='Apple iPhone SE + Carrier Subscription [Cricket Wireless]'
            price={399.99}
            image='https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UY436_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product
            id='4'
            title='One 5 foot Artificial Silk Bird of Paradise Palm Tree Potted Plant'
            price={69.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51tYx9tMVzL._AC_SL1000_.jpg'
            rating={5}
          />
          <Product
            id='5'
            title='Apple iPhone 11 [128GB, Purple] + Carrier Subscription [Cricket Wireless]'
            price={1099.99}
            image='https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY436_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
        <div className='home_row'>
          <Product
            id='5'
            title='Apple iPhone 11 [128GB, Purple] + Carrier Subscription [Cricket Wireless]'
            price={1099.99}
            image='https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UY436_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
