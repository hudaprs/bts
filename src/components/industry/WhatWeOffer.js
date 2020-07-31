import React from 'react'

const WhatWeOffer = () => {
	return (
		<section id='what-we-offer' className='py-4'>
			<div className="container">
				<h3 className="m-heading text-left mb-4">
					What <strong>We Offer</strong>
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
				</div>
			</div>
		</section>
	);
}

export default WhatWeOffer