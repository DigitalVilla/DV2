import React from "react"
import Slashed from "../components/Slashed"

export default function BasePage(props) {
  return (
    <section className="section" data-anchor={props.pageName}>
      <div className={(props.className || props.pageName)}>
        <Slashed text={props.pageName} />
        {props.children}
      </div>
    </section>
  )
}
