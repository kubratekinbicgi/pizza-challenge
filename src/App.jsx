
import HomePage from './Components/HomePage'
import OrderPage from "./Components/OrderPage"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {


  return (
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/order"  component={OrderPage} />
    </Switch>
    </Router>
  )
}

export default App
