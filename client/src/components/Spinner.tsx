import React from "react"
import spinner from "../assets/Loading_icon.gif"

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "256px", height: "256px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner
