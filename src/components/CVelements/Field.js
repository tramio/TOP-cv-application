import React, { Component } from "react";

class Field extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <label for={this.props.inputId}>{this.props.actualLabel}</label>
        <input
          id={this.props.inputId}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={(e) => this.props.onChange(e.target.value)}
          value={this.props.value}
        />
      </li>
    )
  }
}

export default Field;