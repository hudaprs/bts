import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='container'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img
              src={require("../../../assets/img/Navbar/NavbarLogo.png")}
              alt='NavbarLogo'
              style={{ width: "120px", height: "36px" }}
            />
          </Link>

          <ul className='nav-item'>
            <li>
              <a href='#!'>Services</a>
            </li>
            <li>
              <Link to='/industries'>Industries</Link>
            </li>
            <li>
              <a href='#!'>Portfolio</a>
            </li>
            <li>
              <a href='#!'>Blog</a>
            </li>
            <li>
              <a href='#!'>Company</a>
            </li>
            <li>
              <a href='#!'>
                <img
                  src={require("../../../assets/img/Navbar/NavbarSearchIcon.png")}
                  alt='SearchIcon'
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
