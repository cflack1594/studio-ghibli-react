import React from "react";
import PropTypes from "prop-types";
export class Controls extends React.Component {
  static propTypes = {
    dataKeys: PropTypes.object,
    updateData: PropTypes.func,
  };

  handleClick = (event) => {
    this.props.updateData(event.target.value);
  };

  render() {
    const controls = Object.keys(this.props.dataKeys).map((targetedKey) => (
      <div key={targetedKey}>
        <input
          type="radio"
          name="endpoint"
          id={targetedKey}
          value={targetedKey}
          onClick={this.handleClick}
        />
        <label htmlFor={targetedKey}>{targetedKey}</label>
      </div>
    ));

    return <div>{controls}</div>;
  }
}
