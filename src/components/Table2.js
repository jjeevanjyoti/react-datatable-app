import React, { Component } from "react";
import data from "./data";
export default class Table2 extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { tableData: data.rows };
    this.handleLoginKeyUp = this.keyUpHandler.bind(this, "LoginInput");
  }

  componentDidMount() {}
  keyUpHandler(refName, e) {
    let results = [];
    for (var i = 0; i < this.state.tableData.length; i++) {
      for (let key in this.state.tableData[i]) {
        if (
          this.state.tableData[i][key].toLowerCase().indexOf(e.target.value) !=
          -1
        ) {
          results.push(this.state.tableData[i]);
        }
      }
    }
    if (e.target.value.length <= 0) {
      this.setState({ tableData: data.rows });
    } else {
      this.setState({ tableData: results });
    }

    // prints either LoginInput or PwdInput
  }
  render() {
    return (
      <div>
        <input
          type="text"
          id="myInput"
          type="text"
          onKeyUp={this.handleLoginKeyUp}
          ref="LoginInput"
          placeholder="Search for names.."
          title="Type in a name"
        ></input>
        <table id="myTable">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
          {this.state.tableData ? (
            <>
              {this.state.tableData.map((person, index) => (
                <tr>
                  <td>{person.name}</td>
                  <td>{person.position}</td>
                  <td>{person.office}</td>
                  <td>{person.age}</td>
                  <td>{person.date}</td>
                  <td>{person.salary}</td>
                </tr>
              ))}
            </>
          ) : (
            <>No data available !!</>
          )}
        </table>
      </div>
    );
  }
}
