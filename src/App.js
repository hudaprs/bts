import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./assets/styles/App.css"

// Components
import Home from "./components/home/Home"
import Industries from "./components/industry/Industries"
import Service from "./components/service/Service"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/industries' component={Industries} />
        <Route exact path='/services' component={Service} />
      </Switch>
    </Router>
  )
}

export default App
