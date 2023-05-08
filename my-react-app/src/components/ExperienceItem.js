import React from "react"

const ExperienceItem = (props) => {
  return (
    <div className="experience-item">
      <h3>{props.title}</h3>
      <p>
        {props.name}, {props.city}
      </p>
      <p>Date: {props.date}</p>
      <ul>
        <li>{props.description1}</li>
      </ul>
      <a href={props.link}>Learn more</a>
    </div>
  )
}

export default ExperienceItem
