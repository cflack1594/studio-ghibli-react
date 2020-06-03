import React from "react";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export class Table extends React.Component {
  render() {
    return (
      <div>
        <TableHeader />
        <TableRow />
      </div>
    );
  }
}
