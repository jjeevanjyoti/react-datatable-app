import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Tableswitch from "./components/Tableswitch";
import DataTbale from "./pages/DataTable2/index";
function App() {
  return (
    <>
      <Router>
        <Tableswitch />
        <Switch>
          <Route exact path="/">
            <Table1 />
          </Route>
          <Route exact path="/datatable-custom">
            <DataTbale />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
