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
      <h3 className="ui header large green">Showcased Projects</h3>
      <div id="ProjectCollection" className="ui cards stacking stretch">
        {
          Object.values(majorProjects).map(project => <ProjectCard key={project.name} project={project} />)
        }
      </div>
    </div>
  )
}

export default Projects
