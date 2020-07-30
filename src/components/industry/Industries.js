import React from "react"
import MainLayout from "../layouts/MainLayout"
import HeroIndustry from "./HeroIndustry"
import Solution from "./Solution"
import WhatWeDo from "./WhatWeDo"

const Industries = () => {
  return (
    <MainLayout>
      <HeroIndustry />
      <Solution />
      <WhatWeDo />
    </MainLayout>
  )
}

export default Industries
