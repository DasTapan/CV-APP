import React, { Component } from "react";
import Education from "./Education";
import Interest from "./Interest";
import Language from "./Language";
import PersonalInfo from "./PersonalInfo";
import Project from "./Project";
import Skill from "./Skill";

class Intake extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intake">
        <PersonalInfo updatePInfo={this.props.updatePInfo} />
        <Skill updateSkills={this.props.updateSkills} />
        <Language updateLanguages={this.props.updateLanguages} />
        <Interest updateInterests={this.props.updateInterests} />
        <Project updateProjects={this.props.updateProjects} />
        <Education updateEducation={this.props.updateEducation} />
      </div>
    );
  }
}

export default Intake;
