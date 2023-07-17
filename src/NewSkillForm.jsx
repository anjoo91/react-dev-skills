import React from 'react';
import './NewSkillForm.css';

export default function NewSkillForm({ addSkill }) {
  //handler function for the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    const skillInput = event.target.elements.skill.value.trim(); //trim leading/trailing spaces
    const levelInput = event.target.elements.level.value;
    if (skillInput !== '') {
      addSkill({ name: skillInput, level: parseInt(levelInput) }); //ensure level is an int
      event.target.reset(); 
    }
  };

  return (
    <form className="new-skill-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="skill">Skill:</label>
        <input type="text" id="skill" name="skill" />
      </div>

      <div className="form-row">
        <label htmlFor="level">Level:</label>
        <select id="level" name="level">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <button type="submit">Add Skill</button>
    </form>
  );
}
