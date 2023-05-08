import React, { useState } from "react"
import ExperienceItem from "./ExperienceItem"

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Job Title 1",
      description: "Description Job1",
      name: "Company Name 1",
      link: "http://example.com",
      date: "January 2020 - Present",
    },
    {
      title: "Job Title 2",
      description: "Description Job2",
      name: "Company Name 2",
      link: "http://example.com",
      date: "January 2018 - December 2019",
    },
  ])

  const addExperience = (experience) => {
    setExperiences([...experiences, experience])
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.title}
          title={experience.title}
          description1={experience.description}
          name={experience.name}
          link={experience.link}
          date={experience.date}
        />
      ))}
      <ExperienceForm addExperience={addExperience} />
    </div>
  )
}

const ExperienceForm = ({ addExperience }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const newExperience = { title, description, name, link, date }
    addExperience(newExperience)
    setTitle("")
    setDescription("")
    setName("")
    setLink("")
    setDate("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new experience</h3>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input
          type="url"
          id="link"
          value={link}
          onChange={(event) => setLink(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default Experience
