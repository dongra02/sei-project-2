import React from 'react'

import Navbar from './Navbar'

const Header = () => {
  return (
    <section className="hero is-primary with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">
            Plants
          </h1>
          <h2 className="subtitle">
            Some are edible, search for your favourites!
          </h2>
        </div>
      </div>
      <Navbar />
    </section>
  )
}

export default Header