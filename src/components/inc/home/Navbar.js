import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const location = window.location.href.split("/")[3]
  const [scrolled, setScrolled] = useState(false)
  const [navTop, setNavTop] = useState(true)
  const [translateY, setTranslateY] = useState("0px")

  const onScroll = () => {
    if (window.pageYOffset > 100) {
      setNavTop(false)
      if (!scrolled) {
        setTranslateY("-70px")
      }
      setTimeout(() => {
        setTranslateY("0")
        setScrolled(true)
      }, 200)
    } else {
      setNavTop(true)
      setScrolled(false)
    }
  }

  // Navbar animation
  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrolled, navTop, translateY])

  return (
    <div
      id='navbar'
      className={`${navTop ? "top" : ""}`}
      style={{
        transform: `translateY(${translateY})`
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

          <ul className='nav-item nav-item-responsive'>
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
