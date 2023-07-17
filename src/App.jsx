import React from 'react';
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

  // add new skill to the current list but...
  // this won't show w.o new state
  // more on this later
  const addSkill = (newSkill) => {
    skills.push(newSkill);
  };

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
