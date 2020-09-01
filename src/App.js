import React, { Component } from "react";
import Header from "./components/layouts/Header.js";
import Note from "./components/pages/Note.js";
import NoteType from "./components/pages/NoteType.js";
import SpeedSlider from "./components/pages/SpeedSlider.js";
import "./App.css";

class App extends Component {
  state = {
    isChromatic: false,
    speed: 10,
  };
  setSpeed = (newSpeed) => {
    this.setState({ isChromatic: this.state.isChromatic, speed: newSpeed });
  };
  toggleIsChromatic = () => {
    this.setState({
      isChromatic: !this.state.isChromatic,
      speed: this.state.speed,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <NoteType
            toggleIsChromatic={this.toggleIsChromatic}
            isChromatic={this.state.isChromatic}
          />
          <SpeedSlider setSpeed={this.setSpeed} speed={this.state.speed} />

          <Note speed={this.state.speed} isChromatic={this.state.isChromatic} />
        </div>
      </div>
    );
  }
}

export default App;
