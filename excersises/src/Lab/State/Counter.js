// import { Component } from "react";

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0, temp: 0 };
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);

//   }

//   increment(event) {
//     this.setState({
//       count: this.state.temp++,
//     });
//   }
//   decrement() {
//     this.setState({
//       count: this.state.temp--,
//     });
//   }
//   render() {
//     return (
//       <div>
//         Lab: 1.print employee info using class Component
//         <h1>My car color is : {this.state.count}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>decrement</button>
//       </div>
//     );
//   }
// }
// export default Counter;
import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  

  render() {
    return (
      <div>
        <div className="row">
        <h1>Hello</h1>
        <h1>Counter is: {this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.increment}>Increment</button>
        <button className="btn btn-primary" onClick={this.decrement}>Decrement</button>
      </div>
      </div>
    );
  }
}

export default Counter;

