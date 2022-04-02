import React, { Component } from "react";
import Field from "../CVelements/Field";

class Personalia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      postalAddress: "",
      phone: "",
      email: "",
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
  handlePhoneChange = (value) => {
    this.setState({
      phone: value,
    });
  }
  handleEmailChange = (value) => {
    this.setState({
      email: value,
    });
  }

  render() {
    return (
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
            inputId="phone"
            actualLabel="Phone number"
            type="text"
            name="phone"
            placeholder="+123456789"
            onChange={this.handlePhoneChange}
            value={this.state.phone}
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
        </ul>
      </fieldset>
    );
  }
}

export default Personalia;