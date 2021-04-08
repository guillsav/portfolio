import React from "react"

import Project from "../Project/Project.components"

import projects from "../../data"

const ProjectsList = () => {
  return (
    <>
      {projects.map(({ id, ...otheProjectProps }) => (
        <Project key={id} {...otheProjectProps} />
      ))}
    </>
  )
}

export default ProjectsList
