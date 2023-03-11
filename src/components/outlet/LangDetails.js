import React, { Component } from "react";

class LangDetails extends Component {
  render() {
    const [...languages] = this.props.info;

    return (
      <div className="language-details">
        <div className="section-heading">LANGUAGES</div>
        <div className="section-items">
          {languages.map((language) => {
            return (
              <span className="english" key={language.id}>
                {language.text}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default LangDetails;
