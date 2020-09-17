import React from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { getPlantsDistribution } from './lib/api'

import DropDownFilter from './components/DropDownFilter'
import PlantCard from './components/PlantCard'

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
          {/* {this.state.plants.map((plant, i) => <div key={i}>{plant.common_name}</div>)} */}
          {this.state.plants.map((plant, i) => <PlantCard key={i} {...plant}/>)} 
        </div>
      </div>
    )
  }
}

export default App
