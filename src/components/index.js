import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Controls } from "./Controls";
import { Table } from "./Table";

export class ControlledTable extends React.Component {
  static propTypes = {
    dataToDisplay: PropTypes.object,
    dataKeys: PropTypes.object,
    updateData: PropTypes.func,
  };

  render() {
    return (
      <Fragment>
        <Controls
          dataKeys={this.props.dataKeys}
          updateData={this.props.updateData}
        />
        <Table data={this.props.dataToDisplay} />
      </Fragment>
    );
  }
}
