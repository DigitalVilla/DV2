import React from "react"
import logo_DV from "../images/logo_DV.png"

const Banner = (props) => {
  return (
    <div className="header noSelect">
      <img className="main-logo" src={logo_DV} alt="DV" />
      <h1>
        Digital Villa | Media Agency, Web Design, Software Development, Graphic
        design, Website
      </h1>
      <div className="title">
        <span>Digital </span>
        <span className="break"></span>
        <span>Villa</span>
      </div>
      <h2>
        {props.text1}<span className="break"></span>{props.text2}
      </h2>
      {props.children}
    </div>
  )
}

export default Banner
