import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import CV from './pages/CV.js'
import { ReactComponent as Logo } from './assets/gab-hero.svg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { container, logo } from './styles/styles.js'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'


export const getMarkdown = async (path, setState) => {
  const response = await fetch(path)
  const output = await response.text()
  setState(output)
}

const App = () => {
  return (
    <Router>
      <div css={container}>
        <Navbar />
        <Logo css={logo} />

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
      </div>
    </Router >

  )
}

export default App;
