import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./assets/styles/App.css"

// Components
import Home from "./components/home/Home"
import Industries from "./components/industry/Industries"
import Services from "./components/service/Services"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/industries' component={Industries} />
        <Route exact path='/services' component={Services} />
      </Switch>
    </Router>
  )
}

export default App
