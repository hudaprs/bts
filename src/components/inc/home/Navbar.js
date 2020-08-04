import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const location = window.location.href.split("/")[3]
  const [navTop, setNavTop] = useState(true)
  const [navItemActive, setNavItemActive] = useState(false)
  const [translateY, setTranslateY] = useState("0px")

  // Make animation to navbar when scrolling
  const onScroll = () => {
    if (window.pageYOffset > 100) {
      setNavTop(false)
      setTimeout(() => {
        setTranslateY("0")
      }, 200)
    } else {
      setNavTop(true)
    }
  }

  // Navbar animation
  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
    // eslint-disable-next-line
  }, [navTop, translateY])

  return (
    <div
      id='navbar'
      style={{
        transform: `translateY(${translateY})`,
        backgroundColor: `${navTop ? "rgba(23, 23, 23, .5)" : "#171717"}`
      }}
    >
      <div className='container'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img
              src={require("../../../assets/img/Navbar/NavbarLogo.png")}
              alt='NavbarLogo'
              style={{ width: "120px", height: "36px" }}
            />
          </Link>

          {/* Icon Bars For Mobile */}
          <em
            className='fas fa-bars fa-2x bars'
            onClick={() => setNavItemActive(!navItemActive)}
          ></em>

          <ul
            className={`nav-item ${navItemActive ? "nav-item-active" : ""}`}
            style={{
              backgroundColor: `${navTop ? "" : "#171717"}`
            }}
          >
            <li className={location === "services" ? "current" : ""}>
              <Link to='/services'>Services</Link>
            </li>
            <li className={location === "industries" ? "current" : ""}>
              <Link to='/industries'>Industries</Link>
            </li>
            <li>
              <a href='#!'>Portfolio</a>
            </li>
            <li>
              <a href='#!'>Blog</a>
            </li>
            <li className='nav-dropdown'>
              <a href='#!'>
                Company
                <em
                  className='fas fa-caret-down'
                  style={{ marginLeft: "5px" }}
                ></em>
              </a>
              <div className='nav-dropdown-content'>
                <a href='#!'>Link 1</a>
                <a href='#!'>Link 2</a>
                <a href='#!'>Link 3</a>
              </div>
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
