import React, { useState, useEffect } from "react"

const GithubRepos = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/m13ks/repos`)
        const data = await response.json()
        setRepos(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRepos()
  }, [])

  return (
    <div className="github-repos">
      <h2>Github Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            : {repo.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GithubRepos
