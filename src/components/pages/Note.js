import React, { Component } from "react";

export class Note extends Component {
  state = {
    note: "C",
    stringNo: 1,
  };
  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          note: getRandomNaturalNote(),
          stringNo: randomInteger(1, 6),
        }),
      5000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
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
function getRandomNaturalNote() {
  return naturalNotes[randomInteger(0, 6)];
}
function randomInteger(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  return randomNumber;
}
const noteStyle = {
  color: "black",
  fontSize: "300px",
  textAlign: "center",
  padding: "10px",
};

export default Note;
