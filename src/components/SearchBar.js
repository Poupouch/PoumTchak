import React, { Component } from "react";


export default class SearchBar extends Component {
    render() {
        return <input value={this.props.search}
        onChange={this.handleInputChange}> </input>
    }
}
