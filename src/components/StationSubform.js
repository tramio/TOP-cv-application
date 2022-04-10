import React, { Component } from "react";
import Field from "./CVelements/Field";

class ExperienceSubform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.number,
      startDate: "",
      endDate: "",
      organization: "",
      position: "",
      description: "",
      experience: {},
    };
  }
  createExperience = () => {
    let formData = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      organization: this.state.organization,
      position: this.state.position,
      description: this.state.description,
      number: this.state.number,
    };
    this.setState({
      experience: formData,
    });
  }
  handleStartDateChange = (value) => {
    this.setState({
      startDate: value,
    }, this.createExperience);
  }
  handleEndDateChange = (value) => {
    this.setState({
      endDate: value,
    }, this.createExperience);
  }
  handleOrganizationChange = (value) => {
    this.setState({
      organization: value,
    }, this.createExperience);
  }
  handlePositionChange = (value) => {
    this.setState({
      position: value,
    }, this.createExperience);
  }
  handleDescriptionChange = (value) => {
    this.setState({
      description: value,
    }, this.createExperience);
  }
  render() {
    return (      
      <div className="station-subform">
        <Field
          inputId={"startDate-" + this.state.number}
          actualLabel="Start"
          type="text"
          name={"startDate-" + this.state.number}
          placeholder="mm/yyyy"
          onChange={this.handleStartDateChange}
          value={this.state.startDate}
        />
        <Field
          inputId={"endDate-" + this.state.number}
          actualLabel="End"
          type="text"
          name={"endDate-" + this.state.number}
          placeholder="mm/yyyy"
          onChange={this.handleEndDateChange}
          value={this.state.endDate}
        />
        <Field
          inputId={"organization-" + this.state.number}
          actualLabel={this.props.organizationLabel}
          type="text"
          name={"organization-" + this.state.number}
          placeholder={this.props.organizationPlaceholder}
          onChange={this.handleOrganizationChange}
          value={this.state.organization}
        />
        <Field
          inputId={"position-" + this.state.number}
          actualLabel={this.props.positionLabel}
          type="text"
          name={"position-" + this.state.number}
          placeholder={this.props.positionPlaceholder}
          onChange={this.handlePositionChange}
          value={this.state.position}
        />
        <Field
          inputId={"description-" + this.state.number}
          actualLabel={this.props.descriptionLabel}
          type="text"
          name={"description-" + this.state.number}
          placeholder={this.props.descriptionPlaceholder}
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
        <button onClick={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.state.experience, this.state.number);
        }}>Update preview</button>
      </div>
    )
  }
}

export default ExperienceSubform;