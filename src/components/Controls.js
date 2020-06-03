import React from "react";

export class Controls extends React.Component {
  render() {
    return (
      <div>
        <input type="radio" name="endpoint" id="name" value="name" />
        <label htmlFor="name">name</label>
      </div>
    );
  }
}
