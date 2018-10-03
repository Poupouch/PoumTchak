import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props); // IGNORE THIS
    this.handleInputChange = this.handleInputChange.bind(this); // IGNORE THIS

    this.state = { search: "" };
  }

  handleInputChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { search } = this.state;
    return <input value={search} onChange={this.handleInputChange} />;
  }
}
