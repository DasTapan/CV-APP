import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import SkillDetails from "./SkillDetails";
import LangDetails from "./LangDetails";
import InterestDetails from "./InterestDetails";
import ProjectDetails from "./ProjectDetails";
import EduDetails from "./EduDetails";

class Outlet extends Component {
  render() {
    return (
      <div className="outlet">
        <PersonalDetails info={this.props.personalDetails} />
        <SkillDetails info={this.props.skillDetails} />
        <LangDetails info={this.props.langDetails} />
        <InterestDetails info={this.props.interestDetails} />
        <ProjectDetails info={this.props.projectDetails} />
        <EduDetails info={this.props.eduDetails} />
      </div>
    );
  }
}

export default Outlet;
