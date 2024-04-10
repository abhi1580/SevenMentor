import React, { Component } from "react";

export default class ColorChange extends Component {
  constructor() {
    super();
    this.state = { color: "" };

  }
  
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <h3>Enter color name below:</h3>
        <input type="text" className="form" placeholder="Enter any color here" onChange={(event)=>{this.setState({color:event.target.value})}} />
      </div>
    );
  }
}
