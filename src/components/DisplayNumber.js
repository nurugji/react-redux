import React, { Component } from "react";
import store from "../store";

export default class DisplayNumber extends Component {
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
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    );
  }
}
//store값이 변경되었을때 통보를 받아야 한다 통보받았을때 state값을 바꿔주게 되면 render()가 호출되게 된다
