import React, { Component } from "react";

class StateDemo2 extends Component {
  constructor() {
    super();
    this.state = { companyName: "" };
  }

  changeName = (event) => {
    this.setState({ companyName: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <input type="text" className="form-control input-sm" onChange={this.changeName} />
        <h1>Company name is : {this.state.companyName}</h1>
      </div>
    );
  }
}
export default StateDemo2;
