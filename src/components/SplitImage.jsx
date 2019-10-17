import React from "react"

const SplitImage = ({className, image, imageLeft}) => {
  return (
    <div className={"split-image " + className}>
      <div className="left">
        <img src={image} alt="Split Left" />
      </div>
      <div className="right">
        <img src={imageLeft || image} alt="Split Right" />
      </div>
    </div>
  )
}

export default SplitImage
