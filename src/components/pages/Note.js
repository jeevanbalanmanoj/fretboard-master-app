import React, { Component } from "react";
import PropTypes from "prop-types";

export class Note extends Component {
  state = {
    note: "C",
    stringNo: 1,
  };
  refresh = () => {
    this.setState({
      note: getRandomNote(this.props.isChromatic),
      stringNo: randomInteger(1, 6),
    });
  };
  componentDidMount() {
    let tick = () => {
      this.refresh();
      setTimeout(tick, this.props.speed * 1000);
    };
    setTimeout(tick, this.props.speed * 1000);
  }
  /*componentWillUnmount() {
    clearInterval(this.interval);
  }*/
  render() {
    return (
      <div>
        <div style={noteStyle}>
          {this.state.stringNo}
          {this.state.note}
        </div>
      </div>
    );
  }
}
const naturalNotes = ["C", "D", "E", "F", "G", "A", "B"];
const chromaticNotes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
function getRandomNote(isChromatic) {
  return isChromatic ? getRandomChromaticNote() : getRandomNaturalNote();
}
function getRandomNaturalNote() {
  return naturalNotes[randomInteger(0, 6)];
}
function getRandomChromaticNote() {
  return chromaticNotes[randomInteger(0, 11)];
}

// Returns a random number between min(included) and max (included)
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const noteStyle = {
  color: "black",
  fontSize: "300px",
  textAlign: "center",
  padding: "10px",
};
// PropTypes
Note.propTypes = {
  isChromatic: PropTypes.bool.isRequired,
  speed: PropTypes.number.isRequired,
};
export default Note;
