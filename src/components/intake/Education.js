import React, { Component } from "react";
import Highlight from "./Highlight";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        text: "",
        loc: "",
        university: "",
        id: uniqid(),
      },
      education: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("eduInfo")) {
      const savedJson = localStorage.getItem("eduInfo");
      const eduInfo = JSON.parse(savedJson);

      this.setState(
        {
          ...eduInfo,
        },
        () => {
          this.props.updateEducation(this.state.education);
        }
      );
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("eduInfo")) {
      localStorage.setItem("eduInfo", JSON.stringify(this.state));
    } else {
      localStorage.removeItem("eduInfo");
      localStorage.setItem("eduInfo", JSON.stringify(this.state));
    }
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prevState) => ({
      value: {
        ...prevState.value,
        [name]: value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        value: {
          text: "",
          loc: "",
          university: "",
          id: uniqid(),
        },
        education: this.state.education.concat(this.state.value),
      },
      () => {
        this.props.updateEducation(this.state.education);
      }
    );
  }

  deleteEducation(id) {
    this.setState(
      (prevState) => ({
        education: prevState.education.filter((edu) => edu.id !== id),
      }),
      () => {
        this.props.updateEducation(this.state.education);
      }
    );
  }

  render() {
    return (
      <div className="education">
        <h3>Education</h3>
        <Highlight
          items={this.state.education}
          deleteItem={this.deleteEducation}
        />
        <form action="" onSubmit={this.handleSubmit}>
          <h5>Add Education:</h5>
          <div className="form-row">
            <label htmlFor="">Degree :</label>
            <input
              type="text"
              name="text"
              onChange={this.handleChange}
              value={this.state.value.text}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="">University :</label>
            <input
              type="text"
              name="university"
              onChange={this.handleChange}
              value={this.state.value.university}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="">State :</label>
            <input
              type="text"
              name="loc"
              onChange={this.handleChange}
              value={this.state.value.loc}
              required
            />
          </div>
          <div className="form-row submit-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
