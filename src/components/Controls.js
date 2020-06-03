import React from "react";
import PropTypes from "prop-types";
export class Controls extends React.Component {
  static propTypes = {
    dataKeys: PropTypes.object,
  };

  render() {
    const controls = Object.keys(this.props.dataKeys).map((targetedKey) => (
      <div key={targetedKey}>
        <input
          type="radio"
          name="endpoint"
          id={targetedKey}
          value={targetedKey}
        />
        <label htmlFor={targetedKey}>{targetedKey}</label>
      </div>
    ));

    return <div>{controls}</div>;
  }
}
