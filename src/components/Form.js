import React, { Component } from "react";
import Personalia from "./CVsections/Personalia";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      isSubmitted: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmitted: "yes",
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Personalia />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;