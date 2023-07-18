import React from 'react';
import SkillListItem from './SkillListItem';
import './SkillList.css';

export default function SkillList ({ skills }) {
  return (
    <div className="SkillsList">
      {skills.map((skill, index) => (
        <SkillListItem key={index} skill={skill} /> // render SkillListItem for each skill
      ))}
    </div>
  );
};