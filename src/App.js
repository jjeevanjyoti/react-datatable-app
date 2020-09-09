import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import Tableswitch from "./components/Tableswitch";
import DataTable from "./pages/DataTable/index";

function App() {
  return (
    <>
      <Router>
        <Tableswitch />
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          <Route exact path="/datatable-custom">
            <DataTable />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
