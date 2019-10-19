import React from "react"
import Icon from "../components/Icons.jsx"
import video from "../images/nebula.mp4"
import poster from "../constants/poster"
import Banner from "../components/Banner"
import Video from "../components/Video"

const Home = props => {
  let icon =  "mouse"

  const handlePageDown = () => {
    props.api.moveTo(2)
  }

  return (
    <>
      <Banner text1="Transforming Ideas" text2="With Living Designs" />
      <Video poster={poster} media={video} />
      <div className="scroll">
        <Icon
          className="scroll-icon svg-md"
          icon={icon}
          action={handlePageDown}
        />
      </div>
    </>
  )
}

export default Home
