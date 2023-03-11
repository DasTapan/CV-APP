import React, { Component } from "react";

class InterestDetails extends Component {
  render() {
    const [...interests] = this.props.info;

    return (
      <div className="interest-details">
        <div className="section-heading">INTERESTS</div>
        <div className="section-items">
          {interests.map((interest) => {
            return <span key={interest.id}>{interest.text}</span>;
          })}
        </div>
      </div>
    );
  }
}
export default InterestDetails;
