import React from "react";
import PropTypes from "prop-types";
export class TableHeader extends React.Component {
  static propTypes = {
    headers: PropTypes.array,
  };

  render() {
    const headers = this.props.headers.map((header) => (
      <th key={header}>{header}</th>
    ));

    return <tr>{headers}</tr>;
  }
}
