import React from "react"
import IndustryShowcaseImage from "../../assets/img/Industry/Industry.png"

const HeroIndustry = () => {
  return (
    <header style={styles.hero} className='hero'>
      <div className='content'>
        <div className='container'>
          <div className='border'></div>
          <p className='l-heading mb-3'>Industries</p>
          <p
            className='showcase-text text-justify mb-4'
            style={{ width: "50%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </header>
  )
}

const styles = {
  hero: {
    background: `url(${IndustryShowcaseImage}) no-repeat center center/cover`,
    height: "100vh",
    position: "relative",
    color: "#fff"
  }
}

export default HeroIndustry
