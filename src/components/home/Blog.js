import React from "react"

const Blog = () => {
	return (
		<section id='blog' className='my-2 py-4'>
			<div className='container'>
				<div className='blog-header mb-2'>
					<h3 className='header-title m-heading'>Our Latest Blog Post</h3>
					<div className='line'></div>
				</div>
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
						<button type='button' className='btn btn-md btn-primary'>
							Read More
						</button>
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
						<button type='button' className='btn btn-md btn-primary'>
							Read More
						</button>
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
						<button type='button' className='btn btn-md btn-primary'>
							Read More
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blog
