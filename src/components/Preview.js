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
        <div id="preview-personalia">
          <h1 className="name">{firstName} {lastName}</h1>
          <p>📌 {postalAddress}</p>
          <p>📞 {phone}</p>
          <p>📧 {email}</p>
        </div>
        <div id="experience">
          <h1>Experience</h1>

          <div className="station">
            <div className="station-date">
              <p>Since 06/2021</p>
            </div>
            <div className="station-description">
              <h2>The Odin Project</h2>
              <p className="role">Life-long learner</p>
              <p className="description">
                - Write nice HTML, CSS and JavaScript code<br></br>
                - Test it using Jest<br></br>
                - npm, webpack, and much more!
              </p>
            </div>
          </div>

          <div className="station">
            <div className="station-date">
              <p>10/2018</p>
              <p>06/2021</p>
            </div>
            <div className="station-description">
              <h2>A great company</h2>
              <p className="role"> Senior Project Manager</p>
              <p className="description">
                - Manage projects<br></br>
                - Drink a lot of coffee<br></br>
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Preview;