import React, { Component } from "react";

export default class EmpUsingProp extends Component {
  render() {
    const {
      FirstName = "",
      LastName = "",
      Email = "",
      Mobile = "",
    } = this.props;

    return (
      <div>
        <table
          border={1}
          style={{
            margin: "auto", // Center the table horizontally
          }}
        >
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
          <tr>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{Email}</td>
            <td>{Mobile}</td>
          </tr>
        </table>
        <h1>{FirstName}</h1>
        <h1>{LastName}</h1>
        <h1>{Email}</h1>
        <h1>{Mobile}</h1>
      </div>
    );
  }
}
