import React from "react"
import poster from "../constants/poster"
import Banner from "../components/Banner"
import Base from "../layout/Base"
import {Link} from "gatsby"

const error = () => {
  return (
    <Base pageName={"404"} className="Error">
      <div id="page-bg" style={{ backgroundImage: `url(${poster})`}}></div>
       <Banner text1="You have landed " text2="In a black hole">
            <Link className="btn" to='/'>Get back in Orbit</Link>
       </Banner>
    </Base>
  )
}

export default error
