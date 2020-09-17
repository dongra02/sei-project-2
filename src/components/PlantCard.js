import React from 'react'

const PlantCard = (props) => {
  const{ common_name, image_url } = props
  const { self } = props.links


  return (
    <>
      <div>name: {common_name}</div>
      <div>self-link: {self}</div>
    </>
  )
}

export default PlantCard