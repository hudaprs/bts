import React from "react"

const Services = () => {
  return (
    <section id='services' className='my-8 py-4'>
      <div className='container'>
        <div className='services-content'>
          <div className='box item-1'>
            <img
              src={require("../../assets/img/Home/Services/1.svg")}
              alt='Logo1'
              className='service-logo'
            />
            <p>Comprehensive IT Manage Service</p>
          </div>
          <div className='box item-2'>
            <img
              src={require("../../assets/img/Home/Services/2.svg")}
              alt='Logo5'
              className='service-logo'
            />
            <p>Cloud Integration</p>
          </div>
          <div className='box item-3'>
            <img
              src={require("../../assets/img/Home/Services/3.svg")}
              alt='Logo3'
              className='service-logo'
            />
            <p>Management Consulting & Business Services</p>
          </div>
          <div className='services-title'>
            <p className='m-heading mb-3'>
              Our <strong>Services</strong>
            </p>
            <button type='button' className='btn btn-primary'>
              Know More
            </button>
          </div>
          <div className='box item-4'>
            <img
              src={require("../../assets/img/Home/Services/4.svg")}
              alt='Logo4'
              className='service-logo'
            />
            <p>Web & Mobile Development</p>
          </div>
          <div className='box item-5'>
            <img
              src={require("../../assets/img/Home/Services/5.svg")}
              alt='Logo5'
              className='service-logo'
            />
            <p>Business Intelligence, Big Data</p>
          </div>
          <div className='box item-6'>
            <img
              src={require("../../assets/img/Home/Services/6.svg")}
              alt='Logo6'
              className='service-logo'
            />
            <p>More than What Listed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
