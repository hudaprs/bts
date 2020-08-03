import React from "react"
import { Link } from "react-router-dom"

const WhatWeDo = () => {
  return (
    <section id='what-we-do' className='py-4'>
      <div className='container'>
        <h3 className='m-heading text-left mb-4'>
          What <strong>We Do</strong>
        </h3>

        <ul className='menu-list mb-4'>
          <li className='current'>
            <Link to='#!'>Manufacturing</Link>
          </li>
          <li className=''>
            <Link to='#!'>E-commerce</Link>
          </li>
          <li className=''>
            <Link to='#!'>Financial</Link>
          </li>
          <li className=''>
            <Link to='#!'>Education</Link>
          </li>
          <li className=''>
            <Link to='#!'>Logistic</Link>
          </li>
        </ul>

        <div className='grid-col-2'>
          <div>
            <img
              src={require("../../assets/img/Industry/WhatWeDo.png")}
              alt='Tech Expertise'
              className='common-img'
            />
          </div>
          <div>
            <h3 className='m-heading mb-4' style={{ width: "100%" }}>
              About <strong>Manufacturing</strong>
            </h3>
            <p className='lead text-justify mb-2' style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore. quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
