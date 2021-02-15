import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { basketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
  const history = useHistory()
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order Contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
      />

      <button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
