import React, { useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import HeroIndustry from "./HeroIndustry"
import Solution from "./Solution"
import WhatWeDo from "./WhatWeDo"
import WhatWeOffer from "./WhatWeOffer";

const Industries = () => {
  useEffect(() => {
    document.title = "BTS.id - Industries"
  }, [])

  return (
    <MainLayout>
      <HeroIndustry />
      <Solution />
      <WhatWeDo />
      <WhatWeOffer />
    </MainLayout>
  )
}

export default Industries
