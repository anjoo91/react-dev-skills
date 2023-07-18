import React, { useState } from 'react';
import './NewSkillForm.css';

export default function NewSkillForm ({ onAddSkill }) {
  const [skillName, setSkillName] = useState(''); // state for skill name
  const [skillLevel, setSkillLevel] = useState('1'); // state for skill level

  function handleSkillNameChange (event) {
    setSkillName(event.target.value); // update skill name state on input
  };

  function handleSkillLevelChange (event) {
    setSkillLevel(event.target.value); // update skill level state on select
  };

  function handleSubmit (event) {
    event.preventDefault(); // prevent form submission
    const newSkill = { name: skillName, level: parseInt(skillLevel) }; // create new skill object
    onAddSkill(newSkill); // call onAddSkill() passed from the App component
    setSkillName(''); // reset the skill name input state
    setSkillLevel('1'); // reset the skill level select state
  };

  return (
    <div className="NewSkillForm">
      <h2 className="SkillsTitle">Add A Skill</h2>
      <form onSubmit={handleSubmit}> {/* behavior on form submission */}
        <div className="SkillRow">
          <input
            id="skillInput"
            type="text"
            placeholder="Enter Skill"
            className="NewSkillInput"
            value={skillName}
            onChange={handleSkillNameChange}
          />
        </div>
        <div className="SkillRow">
          <select
            id="levelSelect"
            className="NewSkillLevel"
            value={skillLevel}
            onChange={handleSkillLevelChange}
          >
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
            <option value="4">Level 4</option>
            <option value="5">Level 5</option>
          </select>
        </div>
        <button type="submit" className="AddSkillButton">
          Add Skill
        </button>
      </form>
    </div>
  );
};
