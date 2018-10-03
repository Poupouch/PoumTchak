import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Link from "./components/Link";
import SearchBar from "./components/SearchBar";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link url="Hi Kenneth" text = "Click here"/>
        <Button title="Hi Milio" />
        <Button title="Hi Pol" />
        <SearchBar search="Oh" />
      </div>
    );
  }
}

export default App;
