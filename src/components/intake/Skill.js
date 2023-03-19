import React, { useEffect, useState } from "react";
import GeneralForm from "./GeneralForm";
import Highlight from "./Highlight";

function Skill({ updateSkills }) {
  const savedJson = localStorage.getItem("skills");
  const storedSkills = JSON.parse(savedJson);

  const [skills, setSkills] = useState(storedSkills || []);

  useEffect(() => {
    updateSkills(skills);
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills, updateSkills]);

  const changeSkills = (newSkill) => {
    setSkills(skills.concat(newSkill));
    updateSkills(skills);
  };

  const deleteSkills = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
    updateSkills(skills);
  };

  return (
    <div className="skills">
      <h3>Skills</h3>
      <Highlight items={skills} deleteItem={deleteSkills} />
      <GeneralForm subject={"Skill"} updateSection={changeSkills} />
    </div>
  );
}

export default Skill;
