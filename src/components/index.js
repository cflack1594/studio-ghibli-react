import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Controls } from "./Controls";
import { Table } from "./Table";

export class ControlledTable extends React.Component {
  static propTypes = {
    dataToDisplay: PropTypes.array,
    dataKeys: PropTypes.object,
  };

  render() {
    return (
      <Fragment>
        <Controls dataKeys={this.props.dataKeys} />
        <Table data={this.props.dataToDisplay} />
      </Fragment>
    );
  }
}
