import React, { Component } from "react";
import GeneralForm from "./GeneralForm";
import Highlight from "./Highlight";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
    };

    this.changeSkills = this.changeSkills.bind(this);
    this.deleteSkills = this.deleteSkills.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("skills")) {
      const savedJson = localStorage.getItem("skills");
      const skills = JSON.parse(savedJson);

      this.setState(
        {
          ...skills,
        },
        () => {
          this.props.updateSkills(this.state.skills);
        }
      );
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("skills")) {
      localStorage.setItem("skills", JSON.stringify(this.state));
    } else {
      localStorage.removeItem("skills");
      localStorage.setItem("skills", JSON.stringify(this.state));
    }
  }

  changeSkills(newSkill) {
    this.setState(
      {
        skills: this.state.skills.concat(newSkill),
      },
      () => {
        this.props.updateSkills(this.state.skills);
      }
    );
  }

  deleteSkills(id) {
    this.setState(
      (prevState) => ({
        skills: prevState.skills.filter((skill) => skill.id !== id),
      }),
      () => {
        this.props.updateSkills(this.state.skills);
      }
    );
  }

  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        <Highlight items={this.state.skills} deleteItem={this.deleteSkills} />
        <GeneralForm subject={"Skill"} updateSection={this.changeSkills} />
      </div>
    );
  }
}

export default Skill;
