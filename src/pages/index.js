import React, { useState } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Base from "../layout/Base"
import Menu from "../components/Menu.jsx"
// import links from "../constants/links"
import "../scss/main.scss"

export default function FullPage() {
  const [isOpen, setIsOpen] = useState(false)

  const anchors = ["Home", "About", "Works", "Contact"];
//   const pages = [Home, About, Works, Contact];

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ReactFullpage
      licenseKey={process.env.REACT_APP_FP}
      //Navigation
      menu={"#menu"}
      navigation={true}
      navigationPosition={"left"}
      // navigationTooltips={anchors}
      // showActiveTooltip={true}
      slidesNavigation={true}
      scrollingSpeed={1000}
      fitToSectionDelay={100}
      touchSensitivity={5}
      recordHistory={false}
      controlArrows={true}
      verticalCentered={false}
      animateAnchor={false}
      //events
      afterLoad={function(origin, destination, direction) {
        isOpen && setIsOpen()
      }}
      onLeave={function(origin, destination, direction) {
        origin.item.firstChild.classList.add("animateOnLeave")
        // return false;
      }}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <Menu
              anchors={anchors}
              api={fullpageApi}
              isOpen={isOpen}
              toggleMenu={toggleMenu}
            />
            <ReactFullpage.Wrapper>
              {/* {links.map((l, i) =>
								<Base key={i} api={fullpageApi} pageName={l.name} >
									{(isVisible,api) => <l.anchor api={api} isVisible={isVisible} />}
								</Base>
							)} */}
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <h3>Section 1</h3>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Move down
                  </button>
                </div>
                <div className="section">
                  <div className="slide">
                    <h3>Slide 2.1</h3>
                  </div>
                  <div className="slide">
                    <h3>Slide 2.2</h3>
                  </div>
                  <div className="slide">
                    <h3>Slide 2.3</h3>
                  </div>
                </div>
                <div className="section">
                  <h3>Section 3</h3>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          </div>
        )
      }}
    />
  )
}
