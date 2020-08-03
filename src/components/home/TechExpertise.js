import React from "react"

const TechExpertise = () => {
  return (
    <section id='tech-expertise' className='py-4'>
      <div className='container'>
        <div className='grid-col-2'>
          <div>
            <h3
              className='m-heading heading-with-line'
              style={{ position: "relative" }}
            >
              Tech <strong>Expertise</strong>
              <div
                className='line'
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  width: "35%"
                }}
              >
                {/* Left Dot */}
                <div
                  style={{
                    position: "absolute",
                    height: "9px",
                    width: "9px",
                    borderRadius: "50%",
                    backgroundColor: "#B22026",
                    bottom: -5,
                    left: -5
                  }}
                ></div>

                {/* Right Dot */}
                <div
                  style={{
                    position: "absolute",
                    height: "9px",
                    width: "9px",
                    borderRadius: "50%",
                    backgroundColor: "#B22026",
                    bottom: -5,
                    right: -5
                  }}
                ></div>
              </div>
            </h3>
            <p className='lead text-justify mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            {/* Tech List */}
            <div className='tech-list'>
              <img
                src={require("../../assets/img/Home/TechExpertise/Node.png")}
                alt='Node'
              />
              <img
                src={require("../../assets/img/Home/TechExpertise/React.png")}
                alt='React'
              />
              <img
                src={require("../../assets/img/Home/TechExpertise/Xamarin.png")}
                alt='Xamarin'
              />
              <img
                src={require("../../assets/img/Home/TechExpertise/Angular.png")}
                alt='Angular'
              />
            </div>
          </div>
          <div>
            <img
              src={require("../../assets/img/Home/TechExpertise/1.png")}
              alt='Tech Expertise'
              className='common-img'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechExpertise
