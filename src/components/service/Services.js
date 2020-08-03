import React, { useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import ServiceShowcase from "./ServiceShowcase"
import FeaturedServices from "./FeaturedServices"

const Services = () => {
  useEffect(() => {
    document.title = "BTS.id - Services"
  }, [])

  return (
    <MainLayout>
      <ServiceShowcase />
      <FeaturedServices />
    </MainLayout>
  )
}

export default Services
