import React from 'react'
import Icon from '../components/Icons.jsx'
import isMedia from '../utils/isMedia'
import vid from '../images/nebula.mp4'
import img_sm from '../images/nebula-sm.jpg'
import img_md from '../images/nebula-md.jpg'
import img_lg from '../images/nebula-lg.jpg'
import img_4k from '../images/nebula.jpg'
import logo_DV from '../images/logo_DV.png'

let poster = img_sm;

export default function Home(props) {
	let isMobile = isMedia('mobile');
	let isPhone = isMedia('phone')

	let source = isPhone ? '' : vid;
	let icon = isMobile ? 'chevronCircleDn' : 'mouse';
	let dataset = isPhone ? {} : { 'data-autoplay': "true" };

	const handlePageDown = () => {
		props.api.moveTo(2);
	}

	return (
		<React.Fragment>
			<div className="header noSelect">
				<img className="main-logo" src={logo_DV} alt="DV" />
				<h1>Digital Villa | Media Agency</h1>
				<div className="title">
					<span> Digital</span>
					<span className="break"></span>
					<span> Villa</span>
				</div>
				<h2>Transforming Ideas<span className="break"></span> Into living designs</h2>
			</div>
			<div className="video-container">
				<video id="video" {...dataset} loop muted preload="true" poster={poster}>
					<source data-src={source} type='video/mp4' />
				</video>
			</div>
			<div className="scroll">
				<Icon className="scroll-icon svg-md" icon={icon} action={handlePageDown} />
			</div>
		</React.Fragment>
	)
}

(function root() {
	let root = document.getElementsByClassName('page-bg')[0];
	poster = isMedia('phone') ? img_sm : isMedia('tablet') ? img_md
		: isMedia('2kUp') ? img_4k : img_lg;
	root.style.backgroundImage = 'url(' + poster + ')';
})();
