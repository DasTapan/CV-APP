import React, { Component } from "react";
import uniqid from "uniqid";

class GeneralForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { text: "", id: uniqid() },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateSection(this.state.value);

    this.setState({
      value: {
        text: "",
        id: uniqid(),
      },
    });
  }

  handleChange(event) {
    this.setState({
      value: {
        text: event.target.value,
        id: this.state.value.id,
      },
    });
  }

  render() {
    return (
      <div className="general-form">
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">New-{this.props.subject}: </label>
          <input
            type="text"
            value={this.state.value.text}
            onChange={this.handleChange}
          />
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default GeneralForm;
