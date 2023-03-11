import React, { Component } from "react";

class PersonalDetails extends Component {
  render() {
    return (
      <div className="personal-details">
        <div className="heading">
          <span className="name">{this.props.info.fullName}</span>
          <span className="job-title">{this.props.info.jobTitle}</span>
        </div>
        <div className="item-email">
          <span className="email-icon"></span>
          <span>{this.props.info.email}</span>
        </div>
        <div className="item-phone">
          <span className="phone-icon"></span>
          <span>{this.props.info.phone}</span>
        </div>
        <div className="item-location">
          <span className="location-icon"></span>
          <span>
            {this.props.info.city}, {this.props.info.country}
          </span>
        </div>
        <div className="item-linkedIn">
          <span className="linkedIn-icon"></span>
          <span>{this.props.info.linkedIn}</span>
        </div>
        <div className="item-pic"></div>
      </div>
    );
  }
}
export default PersonalDetails;
