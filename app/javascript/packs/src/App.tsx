import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const App = () => (
  <Router>
    <Switch>
      <Route path="/about">
      <div>About!</div>
      </Route>
      <Route path="/">
        <div>Hello World!</div>
      </Route>
    </Switch>
  </Router>
)