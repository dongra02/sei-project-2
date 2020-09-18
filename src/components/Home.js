import React from 'react'

import { getPlantsEdible, getPlantsEdibleQueryTwo } from '../lib/api'
import PlantCard from './PlantCard'
import DropDownFilter from './DropDownFilter'
import SearchPlant from './SearchPlant'

class Home extends React.Component {

  state  = {
    plants: [],
    search: [],
    searchQuery: '',
    links: null
  }

  handleSelectRegion = async(e) => {
    const region =  e.target.value
    console.log(region)
    const response = await getPlantsEdibleQueryTwo()
    const plants = response.data.data
    console.log(response.data.data)
    this.setState({ search: plants })
  }

  filterPlants = async(event) => {
    // console.log(event.target.value)
    const searchQuery = event.target.value
    const response = await getPlantsEdibleQueryTwo(searchQuery)
    const plants = response.data.data
    console.log(response.data.data)
    this.setState({ plants, searchQuery })
  }

  
  CallEdiblePlant = async (pageNum) => {
    const response = await getPlantsEdible(pageNum)
    const plants = response.data.data
    console.log(plants)
    const links = response.data.links
    console.log(response.data.links)
    this.setState({ plants, links })
  }

  componentDidMount = () => {
    this.CallEdiblePlant(1)
  }

  ButtonOnClick = (event) => {
    console.log(event.target.value)
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
        <div className="contianer search-form">
          <form>
            {/* <DropDownFilter handleSelectRegion={this.handleSelectRegion} /> */}
            <SearchPlant filterPlants={this.filterPlants} searchQuery={this.searchQuery}/>
          </form>
        </div>
        <div className="field is-horizontal">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.plants.map((plant, i) => <PlantCard key={i} {...plant}/>)} 
            </div>
          </div>
        </div>
        <div className="buttons is-success is-centered">
          <button className="button is-primary" value={this.state.links.first} onClick={this.ButtonOnClick}>◀◀◀ First</button>
          <button className="button is-primary" value={this.state.links.self} onClick={this.ButtonOnClick}>◀ Previous</button>
          <button className="button is-primary" value={this.state.links.next} onClick={this.ButtonOnClick}>Next ▶</button>
          <button className="button is-primary" value={this.state.links.last} onClick={this.ButtonOnClick}>Last ▶▶▶</button>
        </div>
      </div>
    )
  }
}
export default Home