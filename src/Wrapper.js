import React, { Component } from "react";
import Intake from "./components/intake/Intake";
import Outlet from "./components/outlet/Outlet";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {},
      skills: [],
      languages: [],
      interests: [],
      projects: [],
      education: [],
    };

    this.updatePInfo = this.updatePInfo.bind(this);
    this.updateSkills = this.updateSkills.bind(this);
    this.updateLanguages = this.updateLanguages.bind(this);
    this.updateInterests = this.updateInterests.bind(this);
    this.updateProjects = this.updateProjects.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
  }

  updatePInfo(fullName, jobTitle, email, phone, address) {
    this.setState({
      personalInfo: {
        fullName,
        jobTitle,
        email,
        phone,
        address,
      },
    });
  }

  updateSkills(newSkillArr) {
    this.setState({
      skills: [...newSkillArr],
    });
  }

  updateLanguages(newLangArr) {
    this.setState({
      languages: [...newLangArr],
    });
  }

  updateInterests(newInterestArr) {
    this.setState({
      interests: [...newInterestArr],
    });
  }

  updateProjects(newProjectArr) {
    this.setState({
      projects: [...newProjectArr],
    });
  }

  updateEducation(newEduArr) {
    this.setState({
      education: [...newEduArr],
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Intake
          updatePInfo={this.updatePInfo}
          updateSkills={this.updateSkills}
          updateLanguages={this.updateLanguages}
          updateInterests={this.updateInterests}
          updateProjects={this.updateProjects}
          updateEducation={this.updateEducation}
        />
        <Outlet
          personalDetails={this.state.personalInfo}
          skillDetails={this.state.skills}
          langDetails={this.state.languages}
          interestDetails={this.state.interests}
          projectDetails={this.state.projects}
          eduDetails={this.state.education}
        />
      </div>
    );
  }
}

export default Wrapper;
