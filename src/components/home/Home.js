import React, { useEffect } from "react"

// Components
import HomeLayout from "../layouts/HomeLayout"
import Showcase from "./Showcase"
import Services from "./Services"
import TechExpertise from "./TechExpertise"
import Companies from "./Companies"
import Blog from "./Blog"

const Home = () => {
  useEffect(() => {
    document.title = "BTS - Home"
  }, [])

  return (
    <HomeLayout>
      <Showcase />
      <Services />
      <TechExpertise />
      <Companies />
      <Blog />
    </HomeLayout>
  )
}

export default Home
