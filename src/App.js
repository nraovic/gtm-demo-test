import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
