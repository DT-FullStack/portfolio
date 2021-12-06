import React from 'react'
import './App.sass';
import Projects from '../projects';
import { Project } from '../projects/Project';
import { Packages, Package } from '../projects/Package';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui basic segment">
        <h1 className="ui header huger">Full Stack Portfolio</h1>
        <h2 className="ui header">David Taylor</h2>
        <div className='ui buttons'>
          <a className="ui basic button" href="tel:5125143706" target="_blank" rel="noreferrer">
            <i className="phone icon"></i>(512) 514-3706
          </a>
          <a className="ui basic button" href="mailto:david@codewizard.app" target="_blank" rel="noreferrer">
            <i className="envelope outline icon"></i>david@codewizard.app
          </a>
          <a className="ui basic button" href="https://github.com/DT-FullStack" target="_blank" rel="noreferrer">
            <i className="github icon"></i>DT_FullStack
          </a>
        </div>
      </div>
      <div className="ui divider"></div>

      <div className="ui basic segment">
        <h3 className="ui header large green">Projects</h3>
        <div id="ProjectColllection" className="ui two cards stacking">
          {
            Object.keys(Projects).map((project: string) => {
              const { name, description, highlights, type, packages, github, host }: Project = Projects[project];
              return (
                <div key={project} className="ui card">
                  <div className="content">
                    <img src="" alt="" className="right floated mini ui image" />
                    <div className="header">{name}</div>
                    <div className="meta">{type}</div>
                    <div className="description">
                      <p>{description}</p>
                      {highlights && (
                        <p>
                          <div className="ui list horizontal">
                            <div className="item ui header small">Implements</div>
                            {highlights.map(text => <div className='item'>{text}</div>)}
                          </div>
                        </p>
                      )}
                      <div className="ui labels">
                        {packages.map(({ name }) => (
                          <div key={name} className="ui label">{name}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <a className="ui green inverted button" href={github} target='_blank' rel='noreferrer'><i className="github icon"></i>GitHub</a>
                      {host && <a className="ui green button" href={host.url} target='_blank' rel='noreferrer'><i className="home icon"></i>{host.provider}</a>}
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

      <div className="ui basic segment">
        <h3 className="ui header medium red">Skills</h3>
        <div id="SkillsCollection">
          <div className="ui four doubling cards stretch">
            {Object.keys(Packages).map((pkg: string) => {
              const { name, description, language, experience_level }: Package = Packages[pkg];
              return (
                <div key={pkg} className="ui  card">
                  <div className="content">
                    <img src="" alt="" className="right floated mini ui image" />
                    <div className="header">{name}</div>
                    <div className="description">{description}</div>
                  </div>
                  <div className="extra content labels">
                    <div className={`ui label basic red`}><i className="user outline icon"></i><span >{experience_level}</span></div>
                    <div className={`ui label red`}><i className="code icon"></i><span >{language}</span></div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
