import { useState } from 'react';
import { ProjectList } from '../ProjectInfo/Projects';
import ProjectCard from './ProjectCard';


interface Props {

}

const Projects = (props: Props) => {
  const majorProjects = Object.values(ProjectList).filter(({ minorProject }) => !minorProject);
  const minorProjects = Object.values(ProjectList).filter(({ minorProject }) => minorProject);
  const [showingMinor, setShowingMinor] = useState(false);
  const arrowClass = () => showingMinor ? 'angle right spin90 icon' : 'angle right icon';
  const toggle = () => setShowingMinor(!showingMinor);

  return (
    <div className="ui basic segment">
      <h3 className="ui header large green">Projects</h3>
      <div id="ProjectCollection" className="ui two cards stacking">
        {
          Object.values(majorProjects).map(project => <ProjectCard key={project.name} project={project} />)
        }
      </div>
      <h3 className='ui header large green toggle' onClick={toggle}><i className={arrowClass()}></i>Additional Minor Projects</h3>
      {showingMinor && (
        <div id="MinorProjectCollection" className="ui two cards stacking">
          {
            Object.values(minorProjects).map(project => <ProjectCard key={project.name} project={project} />)
          }
        </div>
      )}
    </div>
  )
}

export default Projects
