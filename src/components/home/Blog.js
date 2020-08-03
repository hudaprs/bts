import React from "react"

const Blog = () => {
  return (
    <section id='blog' className='my-2 py-4'>
      <div className='container'>
        <h3 className='m-heading mb-4' style={{ position: "relative" }}>
          Our Latest Blog Post
          <div
            className='line'
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              width: "62%"
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
        <div className='blog-content'>
          <div className='blog-item'>
            <img
              src={require("../../assets/img/Home/Blog/Blog1.png")}
              alt='Blog1'
              className='blog-img'
            />
            <h6 className='blog-title text-justify mb-2'>
              Aplikasi ERP Pada Rumah Sakit
            </h6>
            <p className='lead text-justify mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='#!' className='btn  btn-primary'>
              Read More
            </a>
          </div>

          <div className='blog-item'>
            <img
              src={require("../../assets/img/Home/Blog/Blog2.png")}
              alt='Blog2'
              className='blog-img'
            />
            <h6 className='blog-title text-justify mb-2'>
              Aplikasi ERP Pada Rumah Sakit
            </h6>
            <p className='lead text-justify mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='#!' className='btn  btn-primary'>
              Read More
            </a>
          </div>

          <div className='blog-item'>
            <img
              src={require("../../assets/img/Home/Blog/Blog3.png")}
              alt='Blog3'
              className='blog-img'
            />
            <h6 className='blog-title text-justify mb-2'>
              Aplikasi ERP Pada Rumah Sakit
            </h6>
            <p className='lead text-justify mb-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href='#!' className='btn  btn-primary'>
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
