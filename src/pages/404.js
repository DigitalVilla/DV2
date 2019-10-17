import React from "react"
import poster from "../constants/poster"
import Banner from "../components/Banner"
import Base from "../layout/Base"
import {Link} from "gatsby"
// import "../scss/pages/_error.scss"

// const error = () => {
//   return (
//     <Base pageName={"404"} className="Error">
//       <div id="page-bg" style={{ backgroundImage: `url(${poster})`}}></div>
//        <Banner text1="You have landed In a black hole" text2="Get back in Orbit with a real Browser:">
//            <h3>Don't miss out on the new technologies. iExplorer is not longer supported by <a
//                     href="https://www.microsoft.com/en-us/microsoft-365/windows/end-of-ie-support">Microsoft</a> </h3>
//             <a class="btn ie-btn" href="https://www.mozilla.org/firefox/new/">Firefox</a>
//             <a class="btn ie-btn" href="https://www.google.com/chrome/">Chrome</a>
//        </Banner>
//     </Base>
//   )
// }
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
