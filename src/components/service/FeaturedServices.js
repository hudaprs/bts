import React from "react"

const FeaturedServices = () => {
  return (
    <section id='featured-service'>
      <div className='container'>
        <h3 className='m-heading text-center mb-4'>
          Featured <strong>Services</strong>
        </h3>

        <div className='grid-col-3'>
          <div className='box box-featured-service'>
            <img
              src={require("../../assets/img/Home/Services/Comperhensive.png")}
              alt='Comprehensive'
              className='featured-service-logo'
            />
            <div className='mb-2'>
              <h3>Comprehensive IT</h3>
              <h3>Manage Service</h3>
            </div>
            <p className='box-text mb-2'>
              We Make and Managing Application Workloads in Remote Offices.
              Transforming Remote or Branch Office Management. We offer you
              flexible choices, development or do outsourcing.
            </p>
          </div>

          <div
            className='box box-featured-service'
            style={{
              position: "relative",
              top: "5%"
            }}
          >
            <img
              src={require("../../assets/img/Home/Services/Development.png")}
              alt='Development'
              className='featured-service-logo'
            />
            <div className='mb-2'>
              <h3>Web & Mobile</h3>
              <h3>Development</h3>
            </div>
            <p className='box-text mb-2'>
              Make your brand growth up with us. Planning analyst (UI UX design,
              Coding, Testing). Application design that supports your business
              goals. Optimization Process, and Offline Integration.
            </p>
          </div>

          <div
            className='box box-featured-service'
            style={{
              position: "relative",
              top: "10%"
            }}
          >
            <img
              src={require("../../assets/img/Home/Services/Cloud.png")}
              alt='cloud'
              className='featured-service-logo'
            />
            <div className='mb-2'>
              <h3>Cloud Integration</h3>
            </div>
            <p className='box-text mb-2'>
              Cloud controls applied. Data management at the local level with
              the highest security. With us, you can Reduced Costs, Reduced
              Risk, and Increased Application Availability.
            </p>
          </div>

          <div
            className='box box-featured-service'
            style={{
              position: "relative",
              bottom: "3%"
            }}
          >
            <img
              src={require("../../assets/img/Home/Services/Data.png")}
              alt='Business'
              className='featured-service-logo'
            />
            <div className='mb-2'>
              <h3>Business</h3>
              <h3>Intelligence, Big Data</h3>
            </div>
            <p className='box-text mb-2'>
              Learn how can you capture, analyze and glean actionable insight
              from the layers of security protecting your enterprise with us.
            </p>
          </div>

          <div
            className='box box-featured-service'
            style={{
              position: "relative",
              top: "3%",
              marginBottom: "40px"
            }}
          >
            <img
              src={require("../../assets/img/Home/Services/Management.png")}
              alt='Management'
              className='featured-service-logo'
            />
            <div className='mb-2'>
              <h3>Management</h3>
              <h3>Consulting & Business Services</h3>
            </div>
            <p className='box-text mb-2'>
              Full support from our expert people. Lead the potential and
              achieve the goal with us.
            </p>
          </div>

          <div
            className='box box-featured-service'
            style={{
              position: "relative",
              top: "9%",
              marginBottom: "80px"
            }}
          >
            <img
              src={require("../../assets/img/Home/Services/Todo.png")}
              alt='Listen'
              className='featured-service-logo'
            />
            <h3 className='mb-2'> </h3>
            <div className='mb-2'>
              <h3>More than What</h3>
              <h3>Listed</h3>
            </div>
            <p className='box-text mb-2'>
              Big revenue will bring good resonation. We believe higher insight
              will bring you an excellent choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices
