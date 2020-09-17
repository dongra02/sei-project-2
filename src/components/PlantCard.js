import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = (props) => {
  const { common_name, image_url } = props
  const { self } = props.links


  return (
    <div className="column is-one-quarter">
      <Link to="/plant" >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image_url} alt="plant image" />
            </figure>
          </div>
          <div className="card-content">
            <div>name: {common_name}</div>
            <div>self-link to wrap in Link component: {self}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PlantCard