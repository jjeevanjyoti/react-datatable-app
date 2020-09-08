import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Tableswitch extends Component {
  render() {
    return (
      <div className="table_switch">
        <Link to="/">Table with Library</Link>
        <br />
        <Link to="/dynamic-table">Table without Library</Link>
      </div>
    );
  }
}
