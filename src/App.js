import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { getPlantsDistribution } from './lib/api'

import DropDownFilter from './components/DropDownFilter'





class App extends React.Component {
  state = {
    plants: []
  }
  
  handleSelectRegion = async(e) => {
    const region =  e.target.value
    console.log(region)
    const response = await getPlantsDistribution(region)
    let plants = response.data.data
    // plants = plants.filter((plant, index, self) =>
    //   index === self.findIndex((t) => (
    //     t.place === plant.place && t.common_name === plant.common_name
    //   ))
    // )
    console.log(plants)
    this.setState({ plants })
  }

  render () {
    if (!this.state.plants) return null

    return (
      <div className="App">
        {/* <h1>Hello World Don Checking for Push</h1> */}
        <div className="field is-horizontal">
          <DropDownFilter handleSelectRegion={this.handleSelectRegion} />
        </div>
        <div>
          {this.state.plants.map(plant => <div key={plant.id}>{plant.common_name} {plant.tdwg_code} {plant.tdwg_level}</div>)}
        </div>
      </div>
    )
  }
}

export default App
