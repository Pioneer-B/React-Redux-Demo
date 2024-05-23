import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getRecommendsList } from "../rtkStore/features/home";
import { decrement } from "../rtkStore/features/counter";

export class pageRtk2 extends PureComponent {
  componentDidMount() {
    this.props.getRecommends();
  }
  changeNum(num) {
    this.props.subNumber(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>pageRtk2 counter : {counter}</h2>
        <h3>请求推荐模拟数据,保存到RtkStore，PageRtk1使用了模拟数据</h3>
        <button onClick={(e) => this.changeNum(1)}>-1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});
const mapDispatchToProps = (dispatch) => ({
  subNumber: (num) => dispatch(decrement(num)),
  getRecommends: () =>
    dispatch(getRecommendsList(["数据1", "数据2", "数据3", "数据4"])),
});
export default connect(mapStateToProps, mapDispatchToProps)(pageRtk2);
