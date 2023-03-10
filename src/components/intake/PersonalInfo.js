import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      jobTitle: "",
      phone: "",
      email: "",
      address: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("personalInfo")) {
      const savedJson = localStorage.getItem("personalInfo");
      const personalInfo = JSON.parse(savedJson);

      this.setState(
        {
          ...personalInfo,
        },
        () => {
          this.props.updatePInfo(
            this.state.fullName,
            this.state.jobTitle,
            this.state.email,
            this.state.phone,
            this.state.address
          );
        }
      );
    }
  }

  componentDidUpdate() {
    if (!localStorage.getItem("personalInfo")) {
      localStorage.setItem("personalInfo", JSON.stringify(this.state));
    } else {
      localStorage.removeItem("personalInfo");
      localStorage.setItem("personalInfo", JSON.stringify(this.state));
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updatePInfo(
      this.state.fullName,
      this.state.jobTitle,
      this.state.email,
      this.state.phone,
      this.state.address
    );
  }

  render() {
    return (
      <div className="personal-info">
        <h3>Personal Info</h3>
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-row profile-pic">
            <div className="pic"></div>
            <input type="file" />
          </div>

          <div className="form-row full-name">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={this.handleChange}
              value={this.state.fullName}
            />
          </div>
          <div className="form-row job-title">
            <label htmlFor="">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              onChange={this.handleChange}
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-row email">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-row phone">
            <label htmlFor="">Phone</label>
            <input
              type="tel"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>
          <div className="form-row address">
            <label htmlFor="">Address</label>
            <textarea
              name="address"
              onChange={this.handleChange}
              value={this.state.address}
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

export default PersonalInfo;
