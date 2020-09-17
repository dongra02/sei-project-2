import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {getPlantsDistribution} from './lib/api'

import DropDownFilter from './components/DropDownFilter'





class App extends React.Component {
  state = {
    plants: []
  }

  
  handleSelectRegion = async(e) => {
    const region =  e.target.value
    console.log(region)
    const response = await getPlantsDistribution(region)
    console.log(response.data.length)
    // api call (region)
    // set plants state to response.data
    return null
  }

  render () {
    return (
      <div className="App">
        {/* <h1>Hello World Don Checking for Push</h1> */}
        <div className="field is-horizontal">
          <DropDownFilter handleSelectRegion={this.handleSelectRegion} />
        </div>
      </div>
    )
  }
}

export default App
