import React, { useState } from "react"
import "../App.css"
export interface Iimage {
  src: string
  alt: string
}

function ImageComponent(props: Iimage) {
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = () => {
    setLoaded(true)
  }
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={`my-image ${loaded ? "image-loaded" : ""}`}
      onLoad={handleImageLoad}
    />
  )
}

export default ImageComponent
