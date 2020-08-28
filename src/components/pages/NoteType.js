import React, { Component } from "react";
import PropTypes from "prop-types";

export class NoteType extends Component {
  handleCheck = () => {
    this.props.toggleIsChromatic();
  };
  render() {
    return (
      <div>
        <label>Chromatic notes{"  "}</label>
        <input
          onChange={this.handleCheck}
          type="checkbox"
          defaultChecked={this.props.isChromatic}
        />
      </div>
    );
  }
}
// PropTypes
NoteType.propTypes = {
  isChromatic: PropTypes.bool.isRequired,
  toggleIsChromatic: PropTypes.func.isRequired,
};
export default NoteType;
