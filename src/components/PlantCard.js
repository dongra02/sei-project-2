import React from 'react'
import { Link } from 'react-router-dom'

const PlantCard = (props) => {
  const { common_name, image_url, slug } = props

  return (
    <div className="column is-one-quarter">
      <Link to={`/${slug}`} >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image_url} alt="plant image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="is-capitalized">{common_name}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PlantCard