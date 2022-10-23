import React from 'react'
import {Route ,BrowserRouter as Router, Switch} from 'react-router-dom'
import home from './home'
import player from './player'
import './App.css'

function app() {
  return(
    
    <Router>
      <Switch>
        <Route exact path="/" component={home}></Route>
        <Route path="/player/:id" component={player}></Route>
      </Switch>
    </Router>

   
    
  )
  
}

export default app