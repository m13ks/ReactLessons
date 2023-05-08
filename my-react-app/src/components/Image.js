import React from "react"
import "./styles.css"

const Image = (props) => {
  return <img src={props.path} alt="Resume" className="img" />
}

export default Image
