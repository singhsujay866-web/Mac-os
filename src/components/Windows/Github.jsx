import React from 'react'
import MacWindows from './MacWindows'
import GithubData from "../../assets/github.json"
import "./github.scss"

const GitCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="card-body">
        <div className="card-header">
          <h1>{data.title}</h1>
          <span className="card-id">#{String(data.id).padStart(2, '0')}</span>
        </div>
        <p className="description">{data.description}</p>
        <div className="tags">
          {data.tags.map((tag, i) => (
            <p className="tag" key={i}>{tag}</p>
          ))}
        </div>
        <div className="urls">
          <a href={data.repoLink} target="_blank" rel="noreferrer">Repo</a>
          {data.demoLink && (
            <a href={data.demoLink} target="_blank" rel="noreferrer">Live Demo</a>
          )}
        </div>
      </div>
    </div>
  )
}

const Github = ({windowsName,  setwindowsState}) => {
  return (
    <MacWindows windowsName="github"  setwindowsState={setwindowsState}>
      <div className="cards">
        {GithubData.map(project => (
          <GitCard key={project.id} data={project} />
        ))}
      </div>
    </MacWindows>
  )
}

export default Github