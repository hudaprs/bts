import React, { useEffect } from "react"
import MainLayout from "../layouts/MainLayout"
import IndustryShowcase from "./IndustryShowcase"
import Solution from "./Solution"
import WhatWeDo from "./WhatWeDo"
import WhatWeOffer from "./WhatWeOffer"

const Industries = () => {
  useEffect(() => {
    document.title = "BTS.id - Industries"
  }, [])

  return (
    <MainLayout>
      <IndustryShowcase />
      <Solution />
      <WhatWeDo />
      <WhatWeOffer />
    </MainLayout>
  )
}

export default Industries
