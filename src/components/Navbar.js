import React from 'react'

import { Link } from 'react-router-dom'  //may or may not need with router since no authorization checks.

const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="container">
        <Link to="/" className="navbar-item">Home</Link>
      </div>
    </nav>
  )
}

export default Navbar