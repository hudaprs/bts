import React from 'react'
import ServiceShowcaseImage from "../../assets/img/Service/Service.png"

const HeroService = () => {
	return (
		<header style={styles.hero} id='hero-industry' className='hero'>
			<div className='container'>
				<div style={styles.content}>
					<div className='border-vertical' style={{ position: 'absolute', top: '31%'}}></div>
					<div style={{marginLeft: '40px'}}>
						<h1 className='l-heading mb-3'>Services</h1>
						<p
							className='text text-justify mb-4'
							style={{width: "50%"}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam.
						</p>
					</div>
				</div>

			</div>
		</header>
	)
}

const styles = {
	hero: {
		background: `url(${ServiceShowcaseImage}) no-repeat center center/cover`,
		height: "100vh",
		position: "relative",
		color: "#fff"
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		height: '100vh',
		alignItems: 'center'
	}
}

export default HeroService
