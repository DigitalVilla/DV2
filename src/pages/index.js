import React, { useState } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Base from "../layout/Base"
import Menu from "../components/Menu.jsx"
import pages from "../constants/pages"
import "../scss/main.scss"

export default function FullPage() {
  const [isOpen, setIsOpen] = useState(false)
  const anchors = pages.map((page)=> page.name);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ReactFullpage
      licenseKey={12121212-12121212-12121212-12121212}
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
      controlArrows={false}
      verticalCentered={false}
      animateAnchor={false}
      //events
      afterLoad={function(origin, destination, direction) {
        isOpen && setIsOpen()
      }}
      onLeave={function(origin, destination, direction) {
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
              {pages.map((p, i) =>
								<Base key={i} api={fullpageApi} pageName={p.name} >
									<p.page api={fullpageApi} isVisible={false} />
								</Base>
							)}
            </ReactFullpage.Wrapper>
          </div>
        )
      }}
    />
  )
}
