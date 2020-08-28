import React from "react";
import Header from "./components/layouts/Header.js";
import Note from "./components/pages/Note.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Note />
      </div>
    </div>
  );
}

export default App;
