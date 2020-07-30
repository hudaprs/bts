import React, { Fragment } from "react"
import Hero from "../layouts/Hero"
import Footer from "../inc/home/Footer"

const HomeLayout = ({ children }) => {
  return (
    <Fragment>
      <Hero />
      {children}
      <Footer />
    </Fragment>
  )
}

export default HomeLayout
