import React from 'react'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import CV from './pages/CV.js'
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const getMarkdown = async (path, setState) => {
  const response = await fetch(path)
  const output = await response.text()
  setState(output)
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/cv'>
          <CV />
        </Route>
      </Switch >
    </Router >
  )
}

export default App;
