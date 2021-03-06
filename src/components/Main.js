import React, { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personalia: {},
      experiences: [],
      education: [],
    }
  }

  getPersonalia = (data) => {
    this.setState({
      personalia: data,
    });
  }
  getExperiences = (data) => {
    this.setState({
      experiences: data,
    });
  }
  getEducation = (data) => {
    this.setState({
      education: data,
    });
  }

  render() {
    return (
      <main>
        <Form
          onSubmit={this.getPersonalia}
          onExperienceChange={this.getExperiences}
          onEducationChange={this.getEducation}
        />
        <div className="preview-container">
          <Preview
            personalia={this.state.personalia}
            experiences={this.state.experiences}
            education={this.state.education}
          />
        </div>
      </main>
    );
  }
}

export default Main;