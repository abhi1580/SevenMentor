import { Component } from "react";

class MyCar extends Component {
  constructor() {
    super();
    this.state = { brand: "TATA", color: "Red" };
    this.changeCar = this.changeCar.bind(this);
  }

  changeCar() {
    this.setState({
      color: "Black",
      brand: "Suzuki",
    });
  }
  render() {
    return (
      <div>
        Lab: 
        1.print employee info using class Component 
        <h1>My car color is : {this.state.color}</h1>
        <h1>My car brand is : {this.state.brand}</h1>
        <button onClick={this.changeCar}>Change Car</button>
      </div>
    );
  }
}
export default MyCar;

