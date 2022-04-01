import React, { Component } from "react";

class Field extends Component {
  render() {
    return (
      <li>
        <label for={this.props.inputId}>{this.props.actualLabel}</label>
        <input
          id={this.props.inputId}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
        />
      </li>
    )
  }
}

export default Field;