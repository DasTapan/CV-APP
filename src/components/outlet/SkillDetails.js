import React, { Component } from "react";

class SkillDetails extends Component {
  render() {
    const [...skills] = this.props.info;

    return (
      <div className="skill-details">
        <div className="section-heading">SKILLS</div>
        <div className="section-items">
          {skills.map((skill) => {
            return <span key={skill.id}>{skill.text}</span>;
          })}
        </div>
      </div>
    );
  }
}
export default SkillDetails;
