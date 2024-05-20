import React, { PureComponent } from "react";
import store from "../store";
import { changeCounterAction } from "../store/actionCreators";

export class TestRedux2 extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  increment(num) {
    store.dispatch(changeCounterAction(num));
  }
  render() {
    return (
      <div>
        <h2>TestRedux2 count: {this.state.counter}</h2>
        <button onClick={(e) => this.increment(10)}>+10</button>
      </div>
    );
  }
}

export default TestRedux2;
