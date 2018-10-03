import React, { Component } from "react";

const styles = {
  width: "200px",
  height: "50px",
  color: "red",
  backgroundColor: "blue",
  marginRight: "12px"
};

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Click");
  }

  render() {
    const { title } = this.props;
    return (
      <button style={styles} onClick={this.handleClick}>
        {title}
      </button>
    );
  }
}
