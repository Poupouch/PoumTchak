import React, { Component } from "react";

const styles = {
  width: "100px",
  height: "50px",
  color: "red",
  backgroundColor: "blue",
  marginRight: "12px"
};

export default class Button extends Component {
  render() {
    const { title } = this.props;
    return <button style={styles}>{title}</button>;
  }
}
