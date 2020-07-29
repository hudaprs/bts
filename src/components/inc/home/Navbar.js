import React from "react"

const Navbar = () => {
  return (
    <div id='navbar'>
      <div className='container'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <img
              src={require("../../../assets/img/Navbar/NavbarLogo.png")}
              alt='NavbarLogo'
              style={{ width: "120px", height: "36px" }}
            />
          </div>

          <ul className='nav-item'>
            <li>
              <a href='#!'>Services</a>
            </li>
            <li>
              <a href='#!'>Industries</a>
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
