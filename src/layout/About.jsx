import React from "react"
import ego from "../images/ego.png"
import NeoText from "../components/NeoText"
import SplitImage from "../components/SplitImage"

// import logger from '../utils/logger';
// let log = logger(`<About/>:`);

const About = props => {
  const isVisible = () => {
    return props.api ? props.api.getActiveSection().anchor === "About" : false
  }
  const neoOptions = {
    className: "scrambled-text title",
    //Controls
    loop: true,
    delay: 500,
    loopDelay: 2000,
    lapses: 8,
    reset: true,
    autoPlay: true,
    speed: "medium",
    initialText: "Digital Villa",
    phrases: ["Husband", "Father", "Developer", "Designer", "Entrepreneur"],
  }

  return (
    <>
      <div className="scrambled-container">
        <NeoText options={neoOptions} animate={isVisible()} />
      </div>
		<SplitImage image={ego} className='split-about'/>
      <div className="article">
	    <button class="black-btn" href="#">View More</button>
	  </div>
    </>
  )
}

export default About
