import React from 'react'
import './App.sass';
import Projects from './ProjectList';
import Skills from './SkillList';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui basic segment">
        <h1 className="ui header huger">Full Stack Portfolio</h1>
        <h2 className="ui header">David Taylor</h2>
        <div className='ui buttons wrap'>
          <a className="ui basic button" href="https://github.com/DT-FullStack" target="_blank" rel="noreferrer">
            <i className="github icon"></i>DT_FullStack
          </a>
          <a className="ui basic button" href="tel:5125143706" target="_blank" rel="noreferrer">
            <i className="phone icon"></i>(512) 514-3706
          </a>
          <a className="ui basic button" href="mailto:david@codewizard.app" target="_blank" rel="noreferrer">
            <i className="envelope outline icon"></i>david@codewizard.app
          </a>
        </div>
      </div>
      <div className="ui divider"></div>
      <Projects />
      <Skills />
    </div>
  )
}

export default App
