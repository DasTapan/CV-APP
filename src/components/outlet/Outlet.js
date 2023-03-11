import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import SkillDetails from "./SkillDetails";

class Outlet extends Component {
  render() {
    return (
      <div className="outlet">
        <PersonalDetails info={this.props.personalDetails} />
        <SkillDetails info={this.props.skillDetails} />
      </div>
    );
  }
}

export default Outlet;
