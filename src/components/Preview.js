import React, { Component } from "react";

class Preview extends Component {
  render() {
    const {
      data: {
        firstName,
        lastName,
        postalAddress,
        phone,
        email,
      }
    } = this.props;
    
    return (
      <div id="preview">
        <h1>{firstName} {lastName}</h1>
        <p>📌 {postalAddress}</p>
        <p>📞 {phone}</p>
        <p>📧 {email}</p>
      </div>
    )
  }
}

export default Preview;