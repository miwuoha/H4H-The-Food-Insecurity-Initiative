import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MapOfTheUS from './views/map-of-the-us'
import Resources from './views/resources'
import GamePage from './views/game-page'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MapOfTheUS} exact path="/map-of-the-us" />
        <Route component={Resources} exact path="/resources" />
        <Route component={GamePage} exact path="/game-page" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
