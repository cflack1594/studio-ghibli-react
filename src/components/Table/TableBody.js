import React from "react";
import PropTypes from "prop-types";
export class TableBody extends React.Component {
  static propTypes = {
    data: PropTypes.array,
  };
  render() {
    return (
      <tr>
        <td>I AM A ROBOT</td>
      </tr>
    );
  }
}
