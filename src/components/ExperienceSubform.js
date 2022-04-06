import React, { Component } from "react";
import Field from "./CVelements/Field";

class ExperienceSubform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.number,
    };
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
          // onChange={this.handler}
          // value={this.state.institution-1}
        />
        <Field
          inputId={"endDate-" + this.state.number}
          actualLabel="End"
          type="text"
          name={"endDate-" + this.state.number}
          placeholder="mm/yyyy"
          // onChange={this.handler}
          // value={this.state.institution-1}
        />
        <Field
          inputId={"organization-" + this.state.number}
          actualLabel="Organization"
          type="text"
          name={"organization-" + this.state.number}
          placeholder="A great company"
          // onChange={this.handler}
          // value={this.state.institution-1}
        />
        <Field
          inputId={"position-" + this.state.number}
          actualLabel="Position"
          type="text"
          name={"position-" + this.state.number}
          placeholder="Junior Project Manager"
          // onChange={this.handler}
          // value={this.state.institution-1}
        />
        <Field
          inputId={"description-" + this.state.number}
          actualLabel="Description"
          type="text"
          name={"description-" + this.state.number}
          placeholder="Managed a lot of projets, drank a lot of coffee..."
          // onChange={this.handler}
          // value={this.state.institution-1}
        />
      </div>
    )
  }

}

export default ExperienceSubform;