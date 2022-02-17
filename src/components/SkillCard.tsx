import { PackageWithStats } from './SkillList';


interface Props {
  skill: PackageWithStats;
  proficiencySort: boolean;
  languageSort: boolean;
}

const SkillCard = ({ proficiencySort, languageSort, skill: { name, description, language, experience_level, timesUsed } }: Props) => {
  return (
    <div key={name} className="ui  card">
      <div className="content">
        <img src="" alt="" className="right floated mini ui image" />
        <div className="header">{name}</div>
        <div className="meta">{timesUsed === 1 ? `1 project` : `${timesUsed} projects`}</div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content labels">
        <div className={`ui label red ${!proficiencySort && 'basic'}`}><i className="user outline icon"></i><span >{experience_level}</span></div>
        <div className={`ui label red ${!languageSort && 'basic'}`}><i className="code icon"></i><span >{language}</span></div>
      </div>
    </div>)
}

export default SkillCard
