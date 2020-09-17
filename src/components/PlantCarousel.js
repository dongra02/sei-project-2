import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const PlantCarousel = (props) => {
  const { flowerArray } = props

  return (
    <Carousel>
      {flowerArray.map((flower, i) => <img key={i} src={flower}/>)}
    </Carousel>
  )

}

export default PlantCarousel