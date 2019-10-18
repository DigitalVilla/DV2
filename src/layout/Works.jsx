import React from "react"
import Laptop from "../components/Laptop"

export default function Works(props) {
  return (
    <div>
      <div className="slide" data-anchor="slide1">
	  <Laptop />
	  </div>
      <div className="slide" data-anchor="slide2">
	  	<iframe data-src="https://match-io.netlify.com" title="Match-io"></iframe>
	   </div>
      <div className="slide" data-anchor="slide3"> </div>
      <div className="slide" data-anchor="slide4">
        <figure>
          <img
            data-src="https://cdn.idropnews.com/wp-content/uploads/2017/03/31104851/color_storm.jpg"
            alt=""
          />
        </figure>
      </div>
      <div className="slide" data-anchor="slide5"> </div>
    </div>
  )
}
