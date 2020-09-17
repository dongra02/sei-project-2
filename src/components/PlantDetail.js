import React from 'react'

import { getSinglePlant } from '../lib/api'

class PlantDetail extends React.Component{

  state = {
    plant: null,
  }

  componentDidMount = async () => {
    const slug = this.props.match.params.slug
    const plant = await getSinglePlant(slug)
    console.log(plant.data.data)
    // console.log(plant.data.data.main_species.images[0])
    // plant.main_species.images.
    this.setState({ plant: plant.data.data })
    
  }

  

  render() {
    if (!this.state.plant) return null

    return (
      <>
        <div>{this.state.plant.common_name}</div>
        <div>{this.state.plant.scientific_name}</div>
        <div>{this.state.plant.edible_part}</div>
        <div>{this.state.plant.genus.name}</div>
        <div>{this.state.plant.family.name}</div>
        <div>{this.state.plant.family_common_name}</div>
        <figure className="image is-4by3">
          <img src={this.state.plant.image_url} alt="plant image" />
        </figure>
        {/* <div>{this.state.plant.main_species.images.flower[0].image_url}</div> */}
      </>
    )
  }

}

export default PlantDetail