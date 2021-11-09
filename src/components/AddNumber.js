import React, { Component } from "react";
import store from "../store";
//+를 했을때 store에 action을 dispatch해야 하므로 store를 import 해줌

export default class AddNumber extends Component {
  state = {
    size: 1,
  };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={() => {
            store.dispatch({ type: "INCREMENT", size: this.state.size });
          }}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={(event) => {
            this.setState({
              size: parseInt(event.target.value),
            });
          }}
        ></input>
      </div>
    );
  }
}
