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
    };
  }
  handleStartDateChange = (value) => {
    this.setState({
      startDate: value,
    });
  }
  handleEndDateChange = (value) => {
    this.setState({
      endDate: value,
    });
  }
  handleOrganizationChange = (value) => {
    this.setState({
      organization: value,
    });
  }
  handlePositionChange = (value) => {
    this.setState({
      position: value,
    });
  }
  handleDescriptionChange = (value) => {
    this.setState({
      description: value,
    });
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
          actualLabel="Organization"
          type="text"
          name={"organization-" + this.state.number}
          placeholder="A great company"
          onChange={this.handleOrganizationChange}
          value={this.state.organization}
        />
        <Field
          inputId={"position-" + this.state.number}
          actualLabel="Position"
          type="text"
          name={"position-" + this.state.number}
          placeholder="Junior Project Manager"
          onChange={this.handlePositionChange}
          value={this.state.position}
        />
        <Field
          inputId={"description-" + this.state.number}
          actualLabel="Description"
          type="text"
          name={"description-" + this.state.number}
          placeholder="Managed a lot of projets, drank a lot of coffee..."
          onChange={this.handleDescriptionChange}
          value={this.state.description}
        />
      </div>
    )
  }

}

export default ExperienceSubform;