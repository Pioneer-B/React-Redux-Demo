import React, { PureComponent } from "react";
import store from "../store";
import { changeCounterAction } from "../store/actionCreators";

export class TestRedux extends PureComponent {
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
        <h2>TestRedux1 count: {this.state.counter}</h2>
        <button onClick={(e) => this.increment(1)}>+1</button>
      </div>
    );
  }
}

export default TestRedux;
