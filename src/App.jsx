import { useState } from 'react';
import SkillList from './SkillList';
import NewSkillForm from './NewSkillForm';
import './App.css';

const skills = [
  { name: 'HTML', level: 5 },
  { name: 'CSS', level: 3 },
  { name: 'JavaScript', level: 4 },
  { name: 'Python', level: 2 },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [skillList, setSkillList] = useState(skills);

  const addSkill = (newSkill) => {
    setSkillList([...skillList, newSkill]);
  };

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
