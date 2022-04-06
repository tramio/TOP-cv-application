import React, { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      data: {},
    }
  }

  handleFormSubmission = (formData) => {
    this.setState({
      data: formData,
    });
  }

  render() {
    return (
      <main>
        <Form onSubmit={this.handleFormSubmission} />
        <div className="preview-container">
          <Preview data={this.state.data}/>
        </div>
      </main>
    );
  }
}

export default Main;