import React from 'react'
import '../Css/Header.css';
import {Link} from 'react-router-dom';
import { ImEarth } from 'react-icons/im';
const Header = () => {
  return (
    <>
      <nav className="navbar custom-navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src={require('../Images/Group 11728.png')} alt="logo"></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ">courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Universities</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item">Action</Link></li>
                  <li><Link className="dropdown-item">Action</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item">Action</Link></li>
                  <li><Link className="dropdown-item">Action</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item">Action</Link></li>
                  <li><Link className="dropdown-item">Action</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown nav-country">
                <ImEarth/>
                <Link className="nav-link dropdown-toggle clr-blur" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item">Action</Link></li>
                  <li><Link className="dropdown-item">Action</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex menu-button">
              <button className="btn login" type="submit">login</button> 
              <button className="btn signup" type="submit">signup</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header