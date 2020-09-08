import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Tableswitch from "./components/Tableswitch";
function App() {
  return (
    <>
      <Router>
        <Tableswitch />
        <Switch>
          <Route exact path="/">
            <Table1 />
          </Route>
          <Route exact path="/dynamic-table">
            <Table2 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
