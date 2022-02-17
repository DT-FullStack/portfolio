import React, { useState } from 'react'
import { PackageList, Package } from '../ProjectInfo/Packages';
import SkillCard from './SkillCard';
import { ProjectList } from '../ProjectInfo/Projects';


interface Props {

}

export interface PackageWithStats extends Package {
  timesUsed: number
}

const timesUsed = (pkg: Package): number => Object.values(ProjectList).map(project => project.packages).filter(pkgs => pkgs.includes(pkg)).length;
const Packages: PackageWithStats[] = Object.values(PackageList).map(pkg => ({ ...pkg, timesUsed: timesUsed(pkg) }));

const Skills = (props: Props) => {
  const [useUsageSort, setUseUsageSort] = useState(true);
  const usageSort = ({ timesUsed: n1 }: PackageWithStats, { timesUsed: n2 }: PackageWithStats) => n2 - n1;
  const abcSort = ({ name: n1 }: PackageWithStats, { name: n2 }: PackageWithStats) => n2 > n1 ? -1 : 1;

  const [useLanguageSort, setUseLanguageSort] = useState(false);
  const languageSort = ({ language: l1 }: PackageWithStats, { language: l2 }: PackageWithStats) => l2 > l1 ? -1 : 1;

  const [useProficiencySort, setUseProficiencySort] = useState(true);
  const proficiencySort = ({ experience_level: p1 }: PackageWithStats, { experience_level: p2 }: PackageWithStats) => {
    const map = (prof: 'Beginner' | 'Intermediate' | 'Advanced') => {
      if (prof === 'Advanced') return 2;
      else if (prof === 'Intermediate') return 1;
      else return 0;
    };
    const n1 = map(p1), n2 = map(p2);
    return n2 - n1;
  };

  const SortedPkgs = (): PackageWithStats[] => {
    let pkgs = Packages;
    pkgs = pkgs.sort(abcSort);
    if (useUsageSort) pkgs = pkgs.sort(usageSort);
    if (useLanguageSort) pkgs = pkgs.sort(languageSort);
    if (useProficiencySort) pkgs = pkgs.sort(proficiencySort);
    return pkgs;
  };

  return (
    <div className="ui basic segment">
      <h3 className="ui header large red">Skills</h3>
      <div className="ui basic segment">
        <div onClick={() => setUseProficiencySort(!useProficiencySort)} className={`ui button red ${!useProficiencySort && 'basic'}`}><i className="edit outline icon"></i><span >Most Proficient</span></div>
        <div onClick={() => setUseLanguageSort(!useLanguageSort)} className={`ui button red ${!useLanguageSort && 'basic'}`}><i className="code icon"></i><span >Language</span></div>
        <div onClick={() => setUseUsageSort(!useUsageSort)} className={`ui button red ${!useUsageSort && 'basic'}`}><i className='hashtag icon'></i>Most Used</div>

      </div>
      <div id="SkillsCollection">
        <div className="ui doubling cards">
          {
            Object.values(SortedPkgs()).map((pkg: PackageWithStats) => <SkillCard key={pkg.name} skill={pkg} proficiencySort={useProficiencySort} languageSort={useLanguageSort} />)
          }
        </div>
      </div>
    </div>)
}

export default Skills
