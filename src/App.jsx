import React, { useState } from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import "./App.css"

export default function App() {
  const [skills, setSkills] = useState([ // initial skills data
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 4 },
    { name: 'Python', level: 2 },
  ]);

  const handleAddSkill = (newSkill) => {
    setSkills([...skills, newSkill]); // update skills state with new skill
  };

  return (
    <div className="App">
      <h1 className='Title'>React Dev Skills</h1>
      <SkillList skills={skills} /> {/* pass skills array to SkillList */}
      <NewSkillForm onAddSkill={handleAddSkill} /> {/* Pass handleAddSkill function to NewSkillForm */}
    </div>
  );
};
