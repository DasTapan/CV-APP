import React from "react";

function EduDetails({ info }) {
  const [...education] = info;

  return (
    <div className="edu-details">
      <div className="section-heading">EDUCATION</div>
      <div className="edu-items">
        {education.map((degree) => {
          return (
            <div className="item" key={degree.id}>
              <div>
                <span className="degree">{degree.text}</span>
                <span className="university">{degree.university}</span>
              </div>
              <span className="location">{degree.loc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default EduDetails;
