import React from 'react'

const Projects = ({ projectData }) => {
  return (
    <>
      {projectData.map((project) => (
        <div className="projects" key={project.id}>
          <div className="project-name">{project.project}</div>
          <div className="description">{project.description}</div>
          <a className="live-view" href={project.path}>
            View
          </a>
        </div>
      ))}
    </>
  )
}

export default Projects