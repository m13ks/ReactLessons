import React from "react"

const Job = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Employer: {props.name}</p>
      <a href={props.link}>{props.link}</a>
    </div>
  )
}

export default Job
