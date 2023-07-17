import React from 'react';
import SkillListItem from './SkillListItem';

export default function SkillList({ skills }) {
  const SkillListItems = skills.map((s, index) => (
    <SkillListItem key={index} skill={s} />
  ));

  return (
    <div>
      <ul className="skill-list">{SkillListItems}</ul>
    </div>
  );
}
