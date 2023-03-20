import React from "react";
import Education from "./Education";
import Interest from "./Interest";
import Language from "./Language";
import PersonalInfo from "./PersonalInfo";
import Project from "./Project";
import Skill from "./Skill";

function Intake({
  updatePInfo,
  updateSkills,
  updateLanguages,
  updateInterests,
  updateProjects,
  updateEducation,
}) {
  return (
    <div className="intake">
      <PersonalInfo updatePInfo={updatePInfo} />
      <Skill updateSkills={updateSkills} />
      <Language updateLanguages={updateLanguages} />
      <Interest updateInterests={updateInterests} />
      <Project updateProjects={updateProjects} />
      <Education updateEducation={updateEducation} />
    </div>
  );
}

export default Intake;
