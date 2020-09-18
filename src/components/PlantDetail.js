import React from 'react'

import { getSinglePlant } from '../lib/api'
import PlantCarousel from './PlantCarousel'

class PlantDetail extends React.Component{

  state = {
    plant: null,
    flowerArray: []
  }

  componentDidMount = async () => {
    const slug = this.props.match.params.slug
    const plant = await getSinglePlant(slug)
    console.log(plant.data.data)
    // console.log(plant.data.data.main_species.images[0])
    console.log(plant.data.data.main_species.images.flower.length )
    const flowerArray = []
    for(let index = 0 ; index < plant.data.data.main_species.images.flower.length; index++) {
      flowerArray.push(plant.data.data.main_species.images.flower[index].image_url)
    }
    console.log(flowerArray)
    this.setState({ plant: plant.data.data, flowerArray })
    
  }

  

  render() {
    if (!this.state.plant) return null

    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="container">
                <p className="title is-1 has-text-centered is-capitalized">{this.state.plant.common_name}</p>
                <p className="subtitle is-3 has-text-centered is-italic is-lowercase">{this.state.plant.scientific_name}</p>
                {this.state.plant.main_species.edible_part && <p>Edible Part: {this.state.plant.main_species.edible_part}}</p>}
                <p>Genus Name: {this.state.plant.genus.name}</p>
                <p>Family Name: {this.state.plant.family.name}</p>
                <p>Family Common Name: {this.state.plant.family_common_name}</p>
                <PlantCarousel flowerArray={this.state.flowerArray}/>
              </div>
            </div>
            <div className="column is-half">
              <figure className="image is-fullwidth">
                <img className="is-rounded" src={this.state.plant.image_url} alt="plant image" />
              </figure>
              {/* <div>{this.state.plant.main_species.images.flower[0].image_url}</div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default PlantDetail