import React, { Component } from "react";
import GeneralForm from "./GeneralForm";
import Highlight from "./Highlight";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = { interests: [] };

    this.changeInterests = this.changeInterests.bind(this);
    this.deleteInterest = this.deleteInterest.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("interests")) {
      const savedJson = localStorage.getItem("interests");
      const interests = JSON.parse(savedJson);

      this.setState(
        {
          ...interests,
        },
        () => {
          this.props.updateInterests(this.state.interests);
        }
      );
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("interests")) {
      localStorage.setItem("interests", JSON.stringify(this.state));
    } else {
      localStorage.removeItem("interests");
      localStorage.setItem("interests", JSON.stringify(this.state));
    }
  }

  changeInterests(newInterest) {
    this.setState(
      {
        interests: this.state.interests.concat(newInterest),
      },
      () => {
        this.props.updateInterests(this.state.interests);
      }
    );
  }

  deleteInterest(id) {
    this.setState(
      (prevState) => ({
        interests: prevState.interests.filter((interest) => interest.id !== id),
      }),
      () => {
        this.props.updateInterests(this.state.interests);
      }
    );
  }

  render() {
    return (
      <div className="interests">
        <h3>Interests</h3>
        <Highlight
          items={this.state.interests}
          deleteItem={this.deleteInterest}
        />
        <GeneralForm
          subject={"Interest"}
          updateSection={this.changeInterests}
        />
      </div>
    );
  }
}

export default Interest;
