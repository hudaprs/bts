import React from 'react'

const FeaturedServices = () => {
	return (
		<section id='featured-service' className="py-4">
			<div className="container">
				<h3 className="m-heading text-center mb-4">
					Featured <strong>Services</strong>
				</h3>

				<div className="grid-col-3">
					<div className="box">
						<img src={require('../../assets/img/Home/Services/1.svg')} alt=""/>
						<h3 className='mb-2'>Manufacturing Bussiness
							Solution</h3>
						<p style={{fontSize: '13px', fontWeight: 'normal', fontFamily: 'Aller-Regular', lineHeight: '2'}}
							 className='mb-2'>Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<button type="submit" className="btn btn-md btn-primary">
							Read More
						</button>
					</div>
					<div className="box" style={{top: '40px', position: 'relative'}}>
						<img src={require('../../assets/img/Home/Services/2.svg')} alt=""/>
						<h3 className='mb-2'>Manufacturing Bussiness
							Solution</h3>
						<p style={{fontSize: '13px', fontWeight: 'normal', fontFamily: 'Aller-Regular', lineHeight: '2'}}
							 className='mb-2'>Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<button type="submit" className="btn btn-md btn-primary">
							Read More
						</button>
					</div>
					<div className="box" style={{top: '80px', position: 'relative'}}>
						<img src={require('../../assets/img/Home/Services/3.svg')} alt=""/>
						<h3 className='mb-2'>Manufacturing Bussiness
							Solution</h3>
						<p style={{fontSize: '13px', fontWeight: 'normal', fontFamily: 'Aller-Regular', lineHeight: '2'}}
							 className='mb-2'>Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<button type="submit" className="btn btn-md btn-primary">
							Read More
						</button>
					</div>
					<div className="box">
						<img src={require('../../assets/img/Home/Services/4.svg')} alt=""/>
						<h3 className='mb-2'>Manufacturing Bussiness
							Solution</h3>
						<p style={{fontSize: '13px', fontWeight: 'normal', fontFamily: 'Aller-Regular', lineHeight: '2'}}
							 className='mb-2'>Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<button type="submit" className="btn btn-md btn-primary">
							Read More
						</button>
					</div>
					<div className="box" style={{marginTop: '40px'}}>
						<img src={require('../../assets/img/Home/Services/5.svg')} alt=""/>
						<h3 className='mb-2'>Manufacturing Bussiness
							Solution</h3>
						<p style={{fontSize: '13px', fontWeight: 'normal', fontFamily: 'Aller-Regular', lineHeight: '2'}}
							 className='mb-2'>Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<button type="submit" className="btn btn-md btn-primary">
							Read More
						</button>
					</div>
					<div className="box" style={{marginTop: '80px'}}>
						<img src={require('../../assets/img/Home/Services/6.svg')} alt=""/>
						<h3 className='mb-2'>Manufacturing Bussiness
							Solution</h3>
						<p style={{fontSize: '13px', fontWeight: 'normal', fontFamily: 'Aller-Regular', lineHeight: '2'}}
							 className='mb-2'>Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation, sed do eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
						<button type="submit" className="btn btn-md btn-primary">
							Read More
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FeaturedServices