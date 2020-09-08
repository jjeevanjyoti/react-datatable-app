import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Tableswitch extends Component {
  render() {
    return (
      <div className="table_switch">
        <Link to="/">Datatable</Link>
        <br />
        <Link to="/datatable-custom">Custom Datatable</Link>
      </div>
    );
  }
}
