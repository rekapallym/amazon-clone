import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51IKrEzHKznd8wfUM4RxgRgdrux1U5NwWsINKsElqnkhsfZQBWKHGavyePiGaiwo6SCD8z8Zl1rV0mongnk28GPNd00ZIUVdDkH'
)

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    //will run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('user is ', authUser)

      if (authUser) {
        // THE USER JUST LOGIN OT THE USER IS LOGGED IN
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
