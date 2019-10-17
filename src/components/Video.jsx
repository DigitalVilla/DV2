import React from 'react'
import isMedia from "../utils/isMedia"

const Video = ({poster, className, media, id}) => {
  let isPhone = isMedia("phone")
  let source = isPhone ? "" : media
  let dataset = isPhone ? {} : { "data-autoplay": "true" }
  console.log(media);


    return (
        <div className={"video-container " +  className}>
			<video id={"video-"+id} {...dataset} loop muted preload="true" poster={poster}>
				<source data-src={source} type='video/mp4' />
			</video>
		</div>
    )
}

export default Video
