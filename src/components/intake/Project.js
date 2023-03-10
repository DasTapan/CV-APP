import React, { Component } from "react";
import Highlight from "./Highlight";
import uniqid from "uniqid";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        text: "", //naming it 'text' only to assign in Highlight (other component store in 'text')
        subTitle: "",
        description: "",
        id: uniqid(),
      },
      projects: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("projectInfo")) {
      const savedJson = localStorage.getItem("projectInfo");
      const projectInfo = JSON.parse(savedJson);

      this.setState(
        {
          ...projectInfo,
        },
        () => {
          this.props.updateProjects(this.state.projects);
        }
      );
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("projectInfo")) {
      localStorage.setItem("projectInfo", JSON.stringify(this.state));
    } else {
      localStorage.removeItem("projectInfo");
      localStorage.setItem("projectInfo", JSON.stringify(this.state));
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
          subTitle: "",
          description: "",
          id: uniqid(),
        },
        projects: this.state.projects.concat(this.state.value),
      },
      () => {
        this.props.updateProjects(this.state.projects);
      }
    );
  }

  deleteProject(id) {
    this.setState(
      (prevState) => ({
        projects: prevState.projects.filter((project) => project.id !== id),
      }),
      () => {
        this.props.updateProjects(this.state.projects);
      }
    );
  }

  render() {
    return (
      <div className="projects">
        <h3>Projects</h3>
        <Highlight
          items={this.state.projects}
          deleteItem={this.deleteProject}
        />
        <form action="" onSubmit={this.handleSubmit}>
          <h5>Add Project:</h5>
          <div className="form-row">
            <label htmlFor="">Title :</label>
            <input
              type="text"
              name="text"
              value={this.state.value.text}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="">Sub-Title :</label>
            <input
              type="text"
              name="subTitle"
              value={this.state.value.subTitle}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-row">
            <label htmlFor="">Description :</label>
            <textarea
              name="description"
              value={this.state.value.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-row submit-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Project;
