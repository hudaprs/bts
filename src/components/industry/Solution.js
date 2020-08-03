import React from "react"

const Solution = () => {
  return (
    <section id='solution' className='py-4'>
      <div className='container'>
        <div className='grid-col-2'>
          <div>
            <h3 className='m-heading mb-4'>
              Our Solution as <strong>System Integrator</strong>
            </h3>
            <p className='lead text-justify mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>
          <div>
            <img
              src={require("../../assets/img/Industry/Solution.png")}
              alt='Tech Expertise'
              className='common-img'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
