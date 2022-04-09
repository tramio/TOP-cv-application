import React, { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personalia: {},
      experiences: [],
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

  render() {
    return (
      <main>
        <Form onSubmit={this.getPersonalia} onExperienceChange={this.getExperiences}/>
        <div className="preview-container">
          <Preview personalia={this.state.personalia}/>
        </div>
      </main>
    );
  }
}

export default Main;