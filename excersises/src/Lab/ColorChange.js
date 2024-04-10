import React, { Component } from "react";

export default class ColorChange extends Component {
  constructor() {
    super();
    this.state = { color: "" };

  }
  
  render() {
    return (
      <div style={{ backgroundColor: this.state.color }}>
        <input type="text" onChange={(event)=>{this.setState({color:event.target.value})}} />
      </div>
    );
  }
}
