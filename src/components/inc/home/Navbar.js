import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [navExpand, setNavExpand] = useState(false)

  return (
    <div id='navbar' className={navExpand ? "expand" : ""}>
      <div className='container'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img
              src={require("../../../assets/img/Navbar/NavbarLogo.png")}
              alt='NavbarLogo'
              style={{ width: "120px", height: "36px" }}
            />
          </Link>

          <ul className='nav-item nav-item-responsive'>
            <li>
              <Link to='/services'>Services</Link>
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
