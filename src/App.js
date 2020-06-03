import React from "react";
import "./App.css";
import { ControlledTable } from "./components";

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ControlledTable />
      </div>
    );
  }
}
