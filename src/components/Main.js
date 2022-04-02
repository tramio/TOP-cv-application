import React, { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

class Main extends Component {
  render() {
    return (
      <main>
        <Form />
        <Preview />
      </main>
    );
  }
}

export default Main;