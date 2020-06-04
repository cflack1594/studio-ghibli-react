import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Controls } from "./Controls";
import { Table } from "./Table";

export class ControlledTable extends React.Component {
  static propTypes = {
    activeKey: PropTypes.string,
    activeData: PropTypes.array,
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
        <Table
          activeData={this.props.activeData}
          activeDataKeys={this.props.dataKeys[this.props.activeKey]}
        />
      </Fragment>
    );
  }
}
