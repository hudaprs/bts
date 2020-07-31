import React from "react"

const TechExpertise = () => {
  return (
    <section id='tech-expertise' className='py-4'>
      <div className='container'>
        <div className='grid-col-2'>
          <div>
            <div
              className='tech-expertise-header'
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <h3 className='m-heading mb-4' style={{ width: "100%" }}>
                Tech <strong>Expertise</strong>
              </h3>
              <div
                className='line'
                style={{ width: "60%", marginBottom: "30px" }}
              ></div>
            </div>
            <p className='lead text-justify mb-2'>
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
