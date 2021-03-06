import React from "react"
import IndustryShowcaseImage from "../../assets/img/Industry/Industry.png"

const IndustryShowcase = () => {
  return (
    <header className='showcase' style={styles.showcaseBackgroundImage}>
      <div className='container'>
        <div className='showcase-container'>
          <div className='showcase-content'>
            <div
              className='border-vertical'
              style={{ position: "absolute", height: "10%" }}
            ></div>
            <div style={styles.borderContainer}>
              <h1 className='mb-4'>Industries</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const styles = {
  showcaseBackgroundImage: {
    background: `url(${IndustryShowcaseImage}) no-repeat center center/cover`
  },
  borderContainer: {
    marginLeft: "30px"
  }
}

export default IndustryShowcase
