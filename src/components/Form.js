import React, { Component } from "react";
import Field from "./CVelements/Field";
import ExperienceSubform from "./ExperienceSubform";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      postalAddress: "",
      email: "",
      phone: "",
      data: {},
      isSubmitted: "",
      numExperienceSubforms: 0,
      experiences: [],
    }
  }
  handleFirstNameChange = (value) => {
    this.setState({
      firstName: value,
    });
  }
  handleLastNameChange = (value) => {
    this.setState({
      lastName: value,
    });
  }
  handlePostalAddressChange = (value) => {
    this.setState({
      postalAddress: value,
    });
  }
  handleEmailChange = (value) => {
    this.setState({
      email: value,
    });
  }
  handlePhoneChange = (value) => {
    this.setState({
      phone: value,
    });
  }
  handleFormSubmission = (e) => {
    e.preventDefault();
    let formData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      postalAddress: this.state.postalAddress,
      email: this.state.email,
      phone: this.state.phone,
    };
    this.setState({
      data: formData,
    }, () => this.props.onSubmit(this.state.data));
  }
  addExperience = () => {
    this.setState({
      numExperienceSubforms: this.state.numExperienceSubforms + 1
    });
  }
  handleExperienceSubmission = (experience, key) => {
    let newArray = this.state.experiences.slice();
    newArray[key] = experience;
    this.setState({
      experiences: newArray,
    });
  }
  
  render() {
    const experienceSubforms = [];

    for (let i = 0; i < this.state.numExperienceSubforms; i++) {
      experienceSubforms.push(
        <ExperienceSubform
          number={i}
          key={i}
          onSubmit={this.handleExperienceSubmission}
        />
      );
    };

    return (
      <form onSubmit={this.handleFormSubmission}>
        <h1>Let's build a resume!</h1>
        <fieldset id="form-personalia">
          <legend>Personalia</legend>
          <ul>
            <Field
              inputId="firstName"
              actualLabel="First name"
              type="text"
              name="firstName"
              placeholder="Elliot"
              onChange={this.handleFirstNameChange}
              value={this.state.firstName}
            />
            <Field
              inputId="lastName"
              actualLabel="Last name"
              type="text"
              name="lastName"
              placeholder="Alderson"
              onChange={this.handleLastNameChange}
              value={this.state.lastName}
            />
            <Field
              inputId="postalAddress"
              actualLabel="Address"
              type="text"
              name="postalAddress"
              placeholder="123 Example Lane, 12345 New York, USA"
              onChange={this.handlePostalAddressChange}
              value={this.state.postalAddress}
            />
            <Field
              inputId="email"
              actualLabel="Email address"
              type="text"
              name="email"
              placeholder="mail@example.com"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />               
            <Field
              inputId="phone"
              actualLabel="Phone number"
              type="text"
              name="phone"
              placeholder="+123456789"
              onChange={this.handlePhoneChange}
              value={this.state.phone}
            />
          </ul>
        </fieldset>
        <fieldset id="form-experience">
        <legend>Professional experience</legend>
          {experienceSubforms}
          <button id="add-experience-btn" type="button" onClick={this.addExperience}>
          Add</button>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;