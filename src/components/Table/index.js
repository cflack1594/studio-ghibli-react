import React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";

export class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    );
  }
}
