import React from 'react';
import './SkillListItem.css';


export default function SkillListItem({ skill }) {
  return (
    <li className="skill-list-item">
      {skill.name}
      <span className="level">Level: {skill.level}</span>
    </li>
  );
}
