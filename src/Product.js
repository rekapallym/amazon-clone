import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue()
  // this basket is the updated state from the data layer
  // console.log('this is the basket', basket)
  const addToBasket = () => {
    //dispatch an action to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    })
  }
  return (
    <div key={id} className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__ratings'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
