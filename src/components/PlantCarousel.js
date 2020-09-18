import React from 'react'

import { Carousel } from 'react-responsive-carousel'


const PlantCarousel = (props) => {
  const { flowerArray } = props

  return (
    <Carousel>
      {flowerArray.map((flower, i) => <img key={i} src={flower} className="carousel-image"/>)}
    </Carousel>
  )

}

export default PlantCarousel