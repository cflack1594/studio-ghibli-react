import React from "react";
import "./App.css";
import { ControlledTable } from "./components";
import {} from "./API";

export class App extends React.Component {
  state = {
    activeData: "",
    dataKeys: {},
    Table: {},
  };

  render() {
    return (
      <div className="App">
        <ControlledTable />
      </div>
    );
  }
}
