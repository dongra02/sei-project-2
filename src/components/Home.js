import React from 'react'

import { getPlantsEdible } from '../lib/api'
import PlantCard from './PlantCard'

class Home extends React.Component {

  state  = {
    plants: [],
    links: null
  }

  componentDidMount = async() => {
    const pageNum = 1
    const response = await getPlantsEdible(pageNum)
    const plants = response.data.data
    console.log(plants)
    const links = response.data.links
    console.log(response.data.links)
    this.setState({ plants, links })
  }
  
  CallEdiblePlant = async (pageNum) => {
    const response = await getPlantsEdible(pageNum)
    const plants = response.data.data
    console.log(plants)
    const links = response.data.links
    console.log(response.data.links)
    this.setState({ plants, links })
  }

  ButtonOnClick = (event) => {
    console.log(event.target.value)
    // /api/v1/plants?page=20270
    let pageNum = event.target.value.split('page=')
    pageNum = pageNum[1]
    if (event.target.value === this.state.links.self) {
      pageNum = String(Number(pageNum) - 1)
      if (pageNum === '0') { 
        pageNum = '1' 
      }
    }
    console.log(pageNum)
    this.CallEdiblePlant(pageNum)
  }

  render () {
    if (!this.state.plants || !this.state.links  ) return null

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
        <div className="buttons is-success">
          <button className="button" value={this.state.links.first} onClick={this.ButtonOnClick}>First</button>
          <button className="button" value={this.state.links.next} onClick={this.ButtonOnClick}>Next</button>
          <button className="button" value={this.state.links.self} onClick={this.ButtonOnClick}>Previous</button>
          <button className="button" value={this.state.links.last} onClick={this.ButtonOnClick}>Last</button>
        </div>
      </div>
    )
  }
}
export default Home