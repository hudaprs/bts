import React, {useEffect} from "react"
import MainLayout from "../layouts/MainLayout";
import HeroService from "./HeroService";
import FeaturedServices from "./FeaturedServices";

const Service = () => {
  useEffect(() => {
    document.title = "BTS.id - Services"
  }, [])

  return (
    <MainLayout>
      <HeroService />
      <FeaturedServices />
    </MainLayout>
  )
}

export default Service
