import React from 'react'

const Video = ({ poster, className, media, id }) => {
	let isPhone =false;
	let source = isPhone ? "" : media;
	let dataset = isPhone ? {} : { "data-autoplay": "true" };
	let datatype = media.substr(media.indexOf('.') + 1);

	return (
		<div className={"video-container " + className}>
			<video id={"video-" + id} {...dataset} loop muted preload="true" poster={poster}>
				<source data-src={source} type={`video/${datatype}`} />
			</video>
		</div>
	)
}

export default Video
