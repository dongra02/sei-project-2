import React from 'react'

import { getPlantsEdible } from '../lib/api'
import PlantCard from './PlantCard'

class Home extends React.Component {

  state  = {
    plants: []
  }

  componentDidMount = async() => {
    const pageNum = 1
    const response = await getPlantsEdible(pageNum)
    const plants = response.data.data
    console.log(plants)
    this.setState({ plants })
  }
  
  render () {

    return (
      <div className="App">
        <div className="section">
          <div className="container">
            <div className="columns is-multiline">
              {/* {this.state.plants.map((plant, i) => <div key={i}>{plant.common_name}</div>)} */}
              {this.state.plants.map((plant, i) => <PlantCard key={i} {...plant}/>)} 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home