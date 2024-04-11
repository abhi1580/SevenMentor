import React, { Component } from "react";

export default class ColorChange extends Component {
  constructor() {
    super();
    this.state = { color: "" };

  }
  
  render() {
    return (
      <div>
        <input type="text" className="form" placeholder="Enter any color here" onChange={(event)=>{this.setState({color:event.target.value})}} />
        <h3 style={{ backgroundColor: this.state.color }}>Color of this text will be changed as entered in above textbox:</h3>
      
      </div>
    );
  }
}
