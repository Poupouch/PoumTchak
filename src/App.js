import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button title="Hi Kenneth" />
        <Button title="Hi Milio" />
        <Button title="Hi Pol" />
      </div>
    );
  }
}

export default App;
