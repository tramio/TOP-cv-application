import React, { Component } from "react";
import Field from "./CVelements/Field";

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
  aggregateData = (e) => {
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
    })
  }
  handleSubmission = (e) => {
    this.aggregateData(e);
    this.props.onSubmit(this.state.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <fieldset id="personalia">
          <h1>Personalia</h1>
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;