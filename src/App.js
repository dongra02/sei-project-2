import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { getPlantsDistribution, getPlantsEdibleQueryTwo } from './lib/api'

import Home from './components/Home'
import PlantDetail from './components/PlantDetail'
import Navbar from './components/Navbar'

class App extends React.Component {
  state = {
    plants: []
  }


  render () {
    if (!this.state.plants) return null
    
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={PlantDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
