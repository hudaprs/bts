import React, { Fragment } from "react"
import Navbar from "../inc/home/Navbar"
import Footer from "../inc/home/Footer"

const HomeLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default HomeLayout
