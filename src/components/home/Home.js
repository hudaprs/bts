import React, { useEffect } from "react"

// Components
import MainLayout from "../layouts/MainLayout"
import Services from "./Services"
import TechExpertise from "./TechExpertise"
import Companies from "./Companies"
import Blog from "./Blog"

const Home = () => {
  useEffect(() => {
    document.title = "BTS - Home"
  }, [])

  return (
    <MainLayout>
      <Services />
      <TechExpertise />
      <Companies />
      <Blog />
    </MainLayout>
  )
}

export default Home
