import React, { Component } from "react";
import Header from "./components/layouts/Header.js";
import Note from "./components/pages/Note.js";
import NoteType from "./components/pages/NoteType.js";
import "./App.css";

class App extends Component {
  state = {
    isChromatic: false,
  };
  toggleIsChromatic = () => {
    this.setState({ isChromatic: !this.state.isChromatic });
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
          <Note isChromatic={this.state.isChromatic} />
        </div>
      </div>
    );
  }
}

export default App;
