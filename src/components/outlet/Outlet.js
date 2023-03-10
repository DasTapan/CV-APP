import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";

class Outlet extends Component {
  render() {
    return (
      <div className="outlet">
        <PersonalDetails info={this.props.personalDetails} />
      </div>
    );
  }
}

export default Outlet;
