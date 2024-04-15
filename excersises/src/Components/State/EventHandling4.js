import React, { Component } from 'react'

export default class EventHandling4 extends Component {
    constructor(){
        super()
        this.state={text:""}
    }
  render() {
    return (
      <div>
        <input type='text' placeholder='Enter text here' onChange={(event)=>{this.setState({text:event.target.value})}}/>
        <h2>You entered:</h2>
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}
