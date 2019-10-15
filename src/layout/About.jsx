import React from 'react'
import ego from '../images/ego.png'
import NeoText from '../components/NeoText'


// import logger from '../utils/logger';
// let log = logger(`<About/>:`);


const About = (props) => {

	const neoOptions = {
		className: 'scrambled-text title',
		//Controls
		loop: true,
		delay: 500,
		loopDelay: 2000,
		lapses: 8,
		reset: true,
		autoPlay: true,
		speed: 'medium',
		initialText: 'Digital Villa',
		phrases: [
			'Husband',
			'Father',
			'Developer',
			'Designer',
			'Entrepreneur',
		]
	}

	return (
		<>
			<div className="scrambled-container">
				<NeoText options={neoOptions} animate={props.isVisible} />
			</div>

			<img className="left" src={ego} alt="Profile Left" />
			<img className="right" src={ego} alt="Profile Right" />
			<div className="article">
			</div>
		</>
	)
}

export default About;