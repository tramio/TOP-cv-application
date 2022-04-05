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
        <h1>CV Preview</h1>
        <p>I'd like my first name ({firstName}) and last name ({lastName}) to be displayed here.</p>
        <p>My postal address ({postalAddress}) would follow, as well as my email address ({email}) and my phone number ({phone}).</p>
      </div>
    )
  }
}

export default Preview;