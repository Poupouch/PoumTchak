import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Button title="My button" />
      </div>
    );
  }
}

export default App;
