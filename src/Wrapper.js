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

  updatePInfo(fullName, jobTitle, email, phone, city, country, linkedIn) {
    this.setState({
      personalInfo: {
        fullName,
        jobTitle,
        email,
        phone,
        city,
        country,
        linkedIn,
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

//------------------------------------------------------------------------

// import React, { useState } from "react";
// import Intake from "./components/intake/Intake";
// import Outlet from "./components/outlet/Outlet";

// function Wrapper() {
//   const [personalInfo, setPersonalInfo] = useState({});
//   const [skills, setSkills] = useState([]);
//   const [languages, setLanguages] = useState([]);
//   const [interests, setInterests] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [education, setEducation] = useState([]);

//   const updatePInfo = (
//     fullName,
//     jobTitle,
//     email,
//     phone,
//     city,
//     country,
//     linkedIn
//   ) => {
//     setPersonalInfo({
//       fullName,
//       jobTitle,
//       email,
//       phone,
//       city,
//       country,
//       linkedIn,
//     });
//   };

//   const updateSkills = (newSkillArr) => {
//     setSkills([...newSkillArr]);
//   };

//   const updateLanguages = (newLangArr) => {
//     setLanguages([...newLangArr]);
//   };

//   const updateInterests = (newInterestArr) => {
//     setInterests([...newInterestArr]);
//   };

//   const updateProjects = (newProjectArr) => {
//     setProjects([...newProjectArr]);
//   };

//   const updateEducation = (newEduArr) => {
//     setEducation([...newEduArr]);
//   };

//   return (
//     <div className="wrapper">
//       <Intake
//         updatePInfo={updatePInfo}
//         updateSkills={updateSkills}
//         updateLanguages={updateLanguages}
//         updateInterests={updateInterests}
//         updateProjects={updateProjects}
//         updateEducation={updateEducation}
//       />
//       <Outlet
//         personalDetails={personalInfo}
//         skillDetails={skills}
//         langDetails={languages}
//         interestDetails={interests}
//         projectDetails={projects}
//         eduDetails={education}
//       />
//     </div>
//   );
// }

// export default Wrapper;
