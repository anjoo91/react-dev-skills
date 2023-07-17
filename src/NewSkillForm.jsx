export default function NewSkillForm() {
    return (
        <>
        <form className="new-skill-form">
            <label for="skill">Skill:</label>
            <input type="text" id="skill" name="skill" />
    
            <label for="level">Level:</label>
            <select id="level" name="level">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
    
            <button type="button" onclick="addSkill()">
            Add Skill
            </button>
        </form>
        </>
    );
  }
  