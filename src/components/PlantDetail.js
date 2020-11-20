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
    const flowerArray = []
    for (let index = 0 ; index < plant.data.data.main_species.images.flower.length; index++) {
      flowerArray.push(plant.data.data.main_species.images.flower[index].image_url)
    }
    this.setState({ plant: plant.data.data, flowerArray })
  }

  
  render() {
    if (!this.state.plant) return null

    const { common_name, scientific_name, main_species, genus, family, family_common_name, image_url } = this.state.plant

    return (
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="container">
                <p className="title is-1 has-text-centered is-capitalized">{common_name}</p>
                <p className="subtitle is-3 has-text-centered is-italic is-lowercase">{scientific_name}</p>
                {main_species.edible_part && <p>Edible Part: {main_species.edible_part}</p>}
                <p>Genus Name: {genus.name}</p>
                <p>Family Name: {family.name}</p>
                {family_common_name && <p>Family Common Name: {family_common_name}</p>}
                <div className="containter flower-array">
                  <PlantCarousel flowerArray={this.state.flowerArray}/>
                </div>
              </div>
            </div>
            { image_url ? 
              <div className="column is-half">
                <figure className="image is-fullwidth">
                  <img className="is-rounded" src={image_url} alt="plant" />
                </figure>
              </div> : <div>Sorry, no image available</div> }
          </div>
        </div>
      </div>
    )
  }

}

export default PlantDetail