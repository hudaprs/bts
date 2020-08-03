import React from "react"
import HomeShowcaseImage from "../../assets/img/Home/Showcase.png"

const HomeShowcase = () => {
  return (
    <header className='showcase' style={styles.showcaseBackgroundImage}>
      <div className='container'>
        <div className='showcase-container'>
          <div className='showcase-content'>
            <div className='border-horizontal'></div>
            <h1 className='mb-4'>System Integrator</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <a
              href='#'
              className='btn btn-md btn-primary mt-4'
              style={styles.showcaseBtn}
            >
              <div style={styles.arrowRighttIconContainer}>
                <img
                  src={require("../../assets/img/ArrowRightIcon.png")}
                  alt='Arrow Right'
                  style={styles.arrowRightIcon}
                />
              </div>

              <span style={styles.showcaseBtnText}>Know More</span>
            </a>

            {/* Mouse Icon */}
            <div style={styles.scrollToView}>
              <img
                src={require("../../assets/img/MouseIcon.svg")}
                alt='Mouse'
              />
            </div>

            {/* Chat Icon */}
            <a href='#!' style={styles.chat}>
              <img src={require("../../assets/img/ChatIcon.svg")} alt='Chat' />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

const styles = {
  showcaseBackgroundImage: {
    background: `url(${HomeShowcaseImage}) no-repeat center center/cover`
  },
  showcaseBtn: {
    width: "198px",
    padding: "20px 20px",
    position: "relative",
    paddingRight: "20px"
  },
  showcaseBtnText: {
    marginRight: "40px"
  },
  arrowRighttIconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingLeft: "20px",
    backgroundColor: "#7C131B",
    height: "100%",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px"
  },
  arrowRightIcon: {
    marginTop: "20px",
    marginRight: "20px"
  },
  scrollToView: {
    position: "absolute",
    top: "85%",
    left: "49%"
  },
  scrollToViewText: {
    margin: 0,
    alignSelf: "center",
    fontSize: "12px"
  },
  chat: {
    position: "fixed",
    right: 20,
    bottom: 10
  }
}

export default HomeShowcase
