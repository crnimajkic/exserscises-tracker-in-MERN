
import React from 'react'
import {Link} from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <Link to="/" className="navbar-brand"><img className='logo' src="./logo50x50.png"></img> Exsercise Tracker</Link>
    <div className="collpase navbar-collpase">
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <Link to="/" className="nav-link">Exsercises</Link>
            </li>
            <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Exsercise Log<i className="fas fa-edit icorr"></i></Link>
            </li>
            <li className="navbar-item">
                <Link to="/users" className="nav-link"> Create User<i className="fas fa-edit icorr"></i></Link>
            </li>
        </ul>
    </div>
</nav>
  )
}

export default Navbar