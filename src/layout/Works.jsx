import React from "react"
import CN from "classnames"

export default function Works(props) {
  return (
    <div>
      <div className="slide" data-anchor="slide1"> </div>
      <div className="slide" data-anchor="slide2"> </div>
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
