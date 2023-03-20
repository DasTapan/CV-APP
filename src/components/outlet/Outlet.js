import React from "react";
import PersonalDetails from "./PersonalDetails";
import SkillDetails from "./SkillDetails";
import LangDetails from "./LangDetails";
import InterestDetails from "./InterestDetails";
import ProjectDetails from "./ProjectDetails";
import EduDetails from "./EduDetails";

function Outlet({
  personalDetails,
  skillDetails,
  langDetails,
  interestDetails,
  projectDetails,
  eduDetails,
}) {
  return (
    <div className="outlet">
      <PersonalDetails info={personalDetails} />
      <SkillDetails info={skillDetails} />
      <LangDetails info={langDetails} />
      <InterestDetails info={interestDetails} />
      <ProjectDetails info={projectDetails} />
      <EduDetails info={eduDetails} />
    </div>
  );
}

export default Outlet;
