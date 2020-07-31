import React from "react"
import HomeShowcaseImage from "../../assets/img/Home/Showcase.png"

const HeroHome = () => {
  return (
    <header style={styles.hero} id='hero-industry' className='hero'>
      <div className='content'>
        <div className='container'>
          <div className='border-horizontal'></div>
          <p className='l-heading mb-3'>
            System <strong>Integrator</strong>
          </p>
          <p
            className='text text-justify mb-4'
            style={{ width: "50%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div style={{ display: "flex" }} className='btn-mobile'>
            <button
              type='button'
              className='btn btn-primary'
              style={{ height: "52px", width: "192px" }}
            >
              Know More
            </button>
            <button
              className='btn btn-secondary'
              style={{
                position: "relative",
                right: 30,
                borderRadius: 0,
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px"
              }}
            >
              <img
                src={require("../../assets/img/ArrowRightIcon.png")}
                alt='ArrowRight'
                style={{
                  width: "24px",
                  height: "24px",
                  alignSelf: "center"
                }}
              />
            </button>
          </div>

          <div
            id='scroll-down'
            style={{
              position: "absolute",
              left: "45%",
              bottom: 0
            }}
          >
            <h5 style={{ marginLeft: 10 }}>Scroll To Explore</h5>
            <img
              src={require("../../assets/img/MouseIcon.svg")}
              alt='Mouse'
              style={{ marginLeft: 46 }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

const styles = {
  hero: {
    background: `url(${HomeShowcaseImage}) no-repeat center center/cover`,
    height: "100vh",
    position: "relative",
    color: "#fff"
  }
}

export default HeroHome
