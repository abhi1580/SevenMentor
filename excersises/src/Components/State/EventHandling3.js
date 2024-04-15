import React, { Component } from 'react'

export default class EventHandling extends Component {
    constructor(){
        super();
        this.state={color:"red"}
    }
    colorHandle=()=>{
        this.setState({color:"yellow"})
    }
  render() {
    return (
      <div>
        <h1>color is: {this.state.color}</h1>
        <button onClick={this.colorHandle.bind(this)}>Click here</button>
      </div>
    )
  }
}
