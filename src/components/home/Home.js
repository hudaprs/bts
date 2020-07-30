import React, { useEffect } from "react"

// Components
import MainLayout from "../layouts/MainLayout"
import HeroHome from "./HeroHome"
import Services from "./Services"
import TechExpertise from "./TechExpertise"
import Companies from "./Companies"
import Blog from "./Blog"

const Home = ({ location }) => {
  useEffect(() => {
    document.title = "BTS - Home"
  }, [])

  return (
    <MainLayout location={location}>
      <HeroHome />
      <Services />
      <TechExpertise />
      <Companies />
      <Blog />
    </MainLayout>
  )
}

export default Home
