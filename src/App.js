import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { getPlantsDistribution } from './lib/api'

import Home from './components/Home'
import PlantDetail from './components/PlantDetail'
import Navbar from './components/Navbar'
import DropDownFilter from './components/DropDownFilter'

class App extends React.Component {
  state = {
    plants: []
  }

  
  handleSelectRegion = async(e) => {
    const region =  e.target.value
    console.log(region)
    const response = await getPlantsDistribution(region)
    const plants = response.data.data
    console.log(plants)
    this.setState({ plants })
  }

  render () {
    if (!this.state.plants) return null
    
    return (
      <BrowserRouter>
        <Navbar/>
        <div className="field is-horizontal">
          <DropDownFilter handleSelectRegion={this.handleSelectRegion} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/plant" component={PlantDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
