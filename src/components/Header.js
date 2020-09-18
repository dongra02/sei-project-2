import React from 'react'

import Navbar from './Navbar'

const Header = () => {
  return (
    <section className="hero is-primary is-medium with-navbar">
      <Navbar />
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Plants
          </h1>
          <h2 className="subtitle">
            Some are edible, search for your favourites!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Header