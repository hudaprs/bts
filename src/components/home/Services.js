import React from "react"

const Services = () => {
  return (
    <section id='services' className='py-4'>
      <div className='container'>
        <div className='services-content'>
          <div className='box-container item-1'>
            <img
              src={require("../../assets/img/Home/Services/Comperhensive.png")}
              alt='Logo1'
              className='service-logo'
            />
            <p className='lead'>Comprehensive IT Manage Service</p>
          </div>
          <div className='box-container item-2'>
            <img
              src={require("../../assets/img/Home/Services/Cloud.png")}
              alt='Logo5'
              className='service-logo'
            />
            <p className='lead'>Cloud Integration</p>
          </div>
          <div className='box-container item-3'>
            <img
              src={require("../../assets/img/Home/Services/Management.png")}
              alt='Logo3'
              className='service-logo'
            />
            <p className='lead'>Management Consulting & Business Services</p>
          </div>
          <div className='services-title text-center'>
            <div>
              <h3 className='m-heading mb-3'>
                Our <strong>Services</strong>
              </h3>
              <a href='#!' className='btn btn-primary mb-4'>
                Know More
              </a>
            </div>
          </div>
          <div className='box-container item-4'>
            <img
              src={require("../../assets/img/Home/Services/Development.png")}
              alt='Logo4'
              className='service-logo'
            />
            <p className='lead'>Web & Mobile Development</p>
          </div>
          <div className='box-container item-5'>
            <img
              src={require("../../assets/img/Home/Services/Data.png")}
              alt='Logo5'
              className='service-logo'
            />
            <p className='lead'>Business Intelligence, Big Data</p>
          </div>
          <div className='box-container item-6'>
            <img
              src={require("../../assets/img/Home/Services/Todo.png")}
              alt='Logo6'
              className='service-logo'
            />
            <p className='lead'>More than What Listed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
