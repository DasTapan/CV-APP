import React, { Component } from "react";
import GeneralForm from "./GeneralForm";
import Highlight from "./Highlight";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = { languages: [] };

    this.changeLanguages = this.changeLanguages.bind(this);
    this.deleteLanguage = this.deleteLanguage.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("languages")) {
      const savedJson = localStorage.getItem("languages");
      const languages = JSON.parse(savedJson);

      this.setState(
        {
          ...languages,
        },
        () => {
          this.props.updateLanguages(this.state.languages);
        }
      );
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("languages")) {
      localStorage.setItem("languages", JSON.stringify(this.state));
    } else {
      localStorage.removeItem("languages");
      localStorage.setItem("languages", JSON.stringify(this.state));
    }
  }

  changeLanguages(newLang) {
    this.setState(
      {
        languages: this.state.languages.concat(newLang),
      },
      () => {
        this.props.updateLanguages(this.state.languages);
      }
    );
  }

  deleteLanguage(id) {
    this.setState(
      (prevState) => ({
        languages: prevState.languages.filter((lang) => lang.id !== id),
      }),
      () => {
        this.props.updateLanguages(this.state.languages);
      }
    );
  }

  render() {
    return (
      <div className="languages">
        <h3>Languages</h3>
        <Highlight
          items={this.state.languages}
          deleteItem={this.deleteLanguage}
        />
        <GeneralForm
          subject={"Language"}
          updateSection={this.changeLanguages}
        />
      </div>
    );
  }
}

export default Language;
