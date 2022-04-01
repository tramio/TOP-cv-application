import React, { Component } from "react";
import Field from "../CVelements/Field";

class Personalia extends Component {
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
          />
          <Field
            inputId="lastName"
            actualLabel="Last name"
            type="text"
            name="lastName"
            placeholder="Alderson"
          />
          <Field
            inputId="phone"
            actualLabel="Phone number"
            type="text"
            name="phone"
            placeholder="+123456789"            
          />
          <Field
            inputId="email"
            actualLabel="Email address"
            type="text"
            name="email"
            placeholder="mail@example.com"            
          />
        </ul>
      </fieldset>
    );
  }
}

export default Personalia;