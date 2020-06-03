import React, { Fragment } from "react";
import { Controls } from "./Controls";
import { Table } from "./Table";

export class ControlledTable extends React.Component {
  render() {
    return (
      <Fragment>
        <Controls />
        <Table />
      </Fragment>
    );
  }
}
