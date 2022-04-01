import React, { Component } from "react";
import Personalia from "./CVsections/Personalia";

class Main extends Component {
  render() {
    return (
      <main>
        <form>
          <Personalia />
          <button type="submit">Validate</button>
        </form>
      </main>
    );
  }
}

export default Main;