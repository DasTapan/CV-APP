import React from "react";

function PersonalDetails({ info }) {
  return (
    <div className="personal-details">
      <div className="heading">
        <span className="name">{info.fullName}</span>
        <span className="job-title">{info.jobTitle}</span>
      </div>
      <div className="item-email">
        <span className="email-icon"></span>
        <span>{info.email}</span>
      </div>
      <div className="item-phone">
        <span className="phone-icon"></span>
        <span>{info.phone}</span>
      </div>
      <div className="item-location">
        <span className="location-icon"></span>
        <span>
          {info.city}, {info.country}
        </span>
      </div>
      <div className="item-linkedIn">
        <span className="linkedIn-icon"></span>
        <span>{info.linkedIn}</span>
      </div>
    </div>
  );
}
export default PersonalDetails;
