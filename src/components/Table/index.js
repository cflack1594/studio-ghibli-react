import React from "react";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import PropTypes from "prop-types";
export class Table extends React.Component {
  static propTypes = {
    activeDataKeys: PropTypes.object,
    data: PropTypes.array,
  };

  render() {
    return (
      <table>
        <thead>
          <TableHeader headers={this.props.activeDataKeys} />
        </thead>
        <tbody>
          <TableBody data={this.props.data} />
        </tbody>
      </table>
    );
  }
}
