import React from 'react'
import {Link} from 'react-router-dom'

 function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg p-2 navbar-light bg-light">
  <Link className="navbar-brand" to="/">Logout</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/posts">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-post">Add post</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
  <img src="../../favicon.ico"/>
</nav>
    </div>
  )
}

export default Navbar
