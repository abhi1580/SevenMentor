import React, { Component } from "react";

//React class component using ES6 class
export default class Flowers extends Component {
    
    //override render method
  render() {
    return (
      <div>
        <ul>
          <li>Rose</li>
          <li>Lily</li>
          <li>Jasmin</li>
          <li>Lotus</li>
        </ul>
      </div>
    );
  }
}
