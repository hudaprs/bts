import React, { Fragment } from "react"
import Navbar from "../inc/home/Navbar"

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      {/* Showcase */}
      <section className='showcase' id='home-showcase'>
        <div className='container'>
          <div className='showcase-container'>
            <div className='showcase-content'>
              <div className='top-border'></div>
              <h1 className='l-heading mb-3'>System Integrator</h1>
              <p className='showcase-text mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <button type='button' className='btn btn-primary'>
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id='services' className='py-3'>
        <div className='container'>
          <div className='showcase-container'>
            <div className='services-content'>
              <div className='box item-1'>
                <img
                  src={require("../../assets/img/Home/Services/1.png")}
                  alt='Logo1'
                />
                <p>Comprehensive IT Manage Service</p>
              </div>
              <div className='box item-2'>
                <img
                  src={require("../../assets/img/Home/Services/2.png")}
                  alt='Logo2'
                />
                <p>Cloud Integration</p>
              </div>
              <div className='box item-3'>
                <img
                  src={require("../../assets/img/Home/Services/3.png")}
                  alt='Logo3'
                />
                <p>Management Consulting & Business Services</p>
              </div>
              <div className='box item-4'>
                <img
                  src={require("../../assets/img/Home/Services/4.png")}
                  alt='Logo4'
                />
                <p>Web & Mobile Development</p>
              </div>
              <div className='box item-5'>
                <img
                  src={require("../../assets/img/Home/Services/5.png")}
                  alt='Logo5'
                />
                <p>Business Intelligence, Big Data</p>
              </div>
              <div className='box item-6'>
                <img
                  src={require("../../assets/img/Home/Services/6.png")}
                  alt='Logo6'
                />
                <p>More than What Listed</p>
              </div>
              <div className='services-title'>
                <h1 className='m-heading mb-3'>Our Services</h1>
                <button type='button' className='btn btn-primary'>
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Expertise */}
      <section id='tech-expertise' className='py-3'>
        <div className='container'>
          <div className='showcase-container showcase-container-each'>
            <div className='tech-expertise-content'>
              <div>
                <p className='m-heading'>Tech Expertise</p>
                <p className='showcase-text justify mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore.
                </p>
                {/* Tech List */}
                <div className='tech-list'>
                  <img
                    src={require("../../assets/img/TechExpertise/Node.png")}
                    alt='Node'
                  />
                  <img
                    src={require("../../assets/img/TechExpertise/React.png")}
                    alt='React'
                  />
                  <img
                    src={require("../../assets/img/TechExpertise/Xamarin.png")}
                    alt='Xamarin'
                  />
                  <img
                    src={require("../../assets/img/TechExpertise/Angular.png")}
                    alt='Angular'
                  />
                </div>
              </div>
              <div>
                <img
                  src={require("../../assets/img/TechExpertise/1.png")}
                  alt='Tech Expertise'
                  className='text-expertise-img'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home