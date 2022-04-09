import React, { Component } from "react";

class Preview extends Component {
  render() {
    const {
      personalia: {
        firstName,
        lastName,
        postalAddress,
        phone,
        email,
      }
    } = this.props;
    const { experiences } = this.props;
    return (

      <div id="preview">
        <div id="preview-personalia">
          <h1 className="name">{firstName} {lastName}</h1>
          <p>📌 {postalAddress}</p>
          <p>📧 {email}</p>
          <p>📞 {phone}</p>
        </div>
        <div id="preview-experiences">
        <h1>Experience</h1>
          {experiences.map((experience) => {
            return (
              <div className="station-preview">
                <div className="station-date">
                  <p>{experience.startDate}</p>
                  <p>{experience.endDate}</p>
                </div>
                <div className="station-description">
                  <h2>{experience.organization}</h2>
                  <p className="role">{experience.position}</p>
                  <p className="description">{experience.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Preview;