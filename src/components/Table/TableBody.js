import React from "react";
import PropTypes from "prop-types";
export class TableBody extends React.Component {
  static propTypes = {
    activeDataKeys: PropTypes.array,
    activeData: PropTypes.array,
  };

  render() {
    const rows = this.props.activeData.map((datum) => {
      return (
        <tr key={datum[0]}>
          {this.props.activeDataKeys.map((targetedKey) => (
            <td key={targetedKey}>{datum[targetedKey]}</td>
          ))}
        </tr>
      );
    });

    return rows;
  }
}
