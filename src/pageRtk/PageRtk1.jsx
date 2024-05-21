import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { increment } from "../rtkStore/features/counter";

export class PageRtk1 extends PureComponent {
  changeNum(num) {
    this.props.addNumber(num);
  }
  render() {
    const { counter, recommends } = this.props;
    return (
      <div>
        <h2>pageRtk1 counter : {counter}</h2>
        <button onClick={(e) => this.changeNum(1)}>+1</button>
        <ul>
          {recommends.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  recommends: state.home.recommends,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(increment(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PageRtk1);
