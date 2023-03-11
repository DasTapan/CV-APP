import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import SkillDetails from "./SkillDetails";
import LangDetails from "./LangDetails";

class Outlet extends Component {
  render() {
    return (
      <div className="outlet">
        <PersonalDetails info={this.props.personalDetails} />
        <SkillDetails info={this.props.skillDetails} />
        <LangDetails info={this.props.langDetails} />
      </div>
    );
  }
}

export default Outlet;
