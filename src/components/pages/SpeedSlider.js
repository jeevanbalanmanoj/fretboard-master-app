import React, { Component } from "react";
import PropTypes from "prop-types";

class SpeedSlider extends Component {
  setSpeed = (event) => {
    this.props.setSpeed(parseInt(event.target.value));
  };
  render() {
    return (
      <div>
        <input
          type="range"
          max="15"
          min="5"
          step="5"
          onChange={this.setSpeed}
          value={this.props.speed}
        ></input>
        <label>{this.props.speed}s</label>
      </div>
    );
  }
}

// PropTypes
SpeedSlider.propTypes = {
  speed: PropTypes.number.isRequired,
  setSpeed: PropTypes.func.isRequired,
};
export default SpeedSlider;
