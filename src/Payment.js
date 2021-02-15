import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { basketTotal } from './reducer'
import axios from './axios'

function Payment() {
  const stripe = useStripe()
  const elements = useElements()
  const [{ basket, user }, dispatch] = useStateValue()
  const history = useHistory()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(null)
  const [processing, setProcessing] = useState('')
  const [succeeded, setSucceeded] = useState(false)

  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${basketTotal(basket) * 100}`,
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  console.log('THE SECRET IS >>>', clientSecret)
  console.log('👱', user)

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        setSucceeded(true)
        setError(null)
        setProcessing(false)

        history.replace('/orders')
      })
  }

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        {/* Paymnet Section- Delivery Address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los Angeles CA</p>
          </div>
        </div>

        {/* Paymnet Section- Review Item */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {/* Paymnet Section- prodcuts show */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Paymnet Section- Paymnent-method */}

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            {/* Stripe */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <React.Fragment>
                      <h3>Order Total: {value}</h3>
                    </React.Fragment>
                  )}
                  decimalScale={2}
                  value={basketTotal(basket)}
                  displayType={'text'}
                  thousandSeperator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
