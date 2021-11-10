import React, { Component } from "react";
import store from "../store";
import DisplayNumber from "../components/DisplayNumber";

export default class extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({
        number: store.getState().number,
      });
    });
  }
  state = {
    number: store.getState().number,
  };
  render() {
    return <DisplayNumber number={this.state.number}></DisplayNumber>;
  }
}
