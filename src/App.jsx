import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'

import HomePage from './HomePage'
import OrderPage from "./OrderPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {


  return (
    <Router>
    <Switch>
      <Route path="/" exact>
      <HomePage/>
      <OrderPage />
      <FinalPage/>
      </Route>
    </Switch>
    </Router>
  )
}

export default App
