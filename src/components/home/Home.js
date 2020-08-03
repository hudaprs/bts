import React, { useEffect } from "react"

// Components
import MainLayout from "../layouts/MainLayout"
import HomeShowcase from "./HomeShowcase"
import Services from "./Services"
import TechExpertise from "./TechExpertise"
import Companies from "./Companies"
import Blog from "./Blog"

const Home = ({ location }) => {
  useEffect(() => {
    document.title = "BTS.id - Home"
  }, [])

  return (
    <MainLayout location={location}>
      <HomeShowcase />
      <Services />
      <TechExpertise />
      <Companies />
      <Blog />
    </MainLayout>
  )
}

export default Home
