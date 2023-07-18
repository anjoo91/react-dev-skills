import React from 'react';
import './SkillListItem.css';

export default function SkillListItem ({ skill }) {
  return (
    <div className="SkillListItem">
      <span className="SkillName">{skill.name}</span>
      <span className="SkillLevel">Level {skill.level}</span>
    </div>
  );
};