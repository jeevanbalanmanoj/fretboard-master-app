import React, { Component } from "react";

export class Note extends Component {
  render() {
    return <div style={noteStyle}>C</div>;
  }
}
const noteStyle = {
  color: "black",
  fontFamily: "Georgia, serif",
  fontSize: "300px",
  textAlign: "center",
  padding: "10px",
};

export default Note;
