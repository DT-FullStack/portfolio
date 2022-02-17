import React from 'react'
import { Project } from '../ProjectInfo/Projects';

interface Props {
  project: Project
}

const ProjectCard = ({ project: { name, type, description, highlights, packages, github, host } }: Props) => {
  return (
    <div key={name} className="ui card">
      <div className="content">
        <div className="header green">{name}</div>
        <div className="meta">{type} Design</div>
        <div className="description">
          {description.map((desc, d) => <p key={d}>{desc}</p>)}
          {highlights && (
            <div className='section'>
              <div className="ui header small">Highlights</div>
              <div className="ui labels">
                {highlights.map((text, i) => <div key={i} className='ui label'>{text}</div>)}
              </div>
            </div>
          )}
          <div className="section">
            <div className="ui header small">Packages</div>
            <div className="ui labels">
              {packages.map(({ name }) => (
                <div key={name} className="ui label">{name}</div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <a className="ui green inverted button" href={github} target='_blank' rel='noreferrer'><i className="github icon"></i>GitHub</a>
          {host && <a className="ui green button" href={host.url} target='_blank' rel='noreferrer'><i className="home icon"></i>{host.provider}</a>}
        </div>
      </div>
    </div>)
}

export default ProjectCard
