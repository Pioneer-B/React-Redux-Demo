import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changeCounterAction } from "../store/actionCreators";

export class TestReactRedux1 extends PureComponent {
  changeNum(num) {
    this.props.addNumber(num);
  }
  render() {
    const { counter, recommends } = this.props;
    return (
      <div>
        <h2>TestReactRedux1 counter: {counter}</h2>
        <button onClick={(e) => this.changeNum(100)}>+100</button>
        <ul>
          {recommends.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// connect的作用：将store 和 <pageReactRedux1 />联系到一起, 本质就是对我们自己写的redux做了层封装,
// connect本身是一个普通函数，但它的返回值是一个高阶函数:
// 所以第二个()需要传入一个组件
// 第一个()是指明哪些数据，需要映射到传入的组件，因为store中的数据有很多，
// 如果store中全部数据都映射给组件,那任何一个数据发生改变,组件都需要重新更新

// 第一个()接受两个函数类型的参数:
// 参数1: 是为了做映射,返回组件需要的store中的数据
// 参数2: 是为了做映射,返回组件需要的dispatch

// connect(fn1)返回的高阶组件内部做了劫持,通过<estReactRedux1 {...this.props} {...mapStateToProps()} {...mapDispatchToProps()}/>,
// 以props形式将两种数据穿给了estReactRedux1,
const mapStateToProps = (state) => ({
  counter: state.counter,
  recommends: state.recommends,
});
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(changeCounterAction(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TestReactRedux1);
