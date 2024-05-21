import React, { PureComponent } from "react";
import store from "../rtkStore";

// connect的参数:
// 参数一: 函数
// 参数二: 函数
// 返回值: 函数 => 高阶组件

// 目前已经实现了connect功能，但是有个缺陷，如果将mockConnect发布到npm，别人下载了也无法使用
// 原因：store是写死导入的，比如导入的路径和文件夹都是固定的，别人的文件夹不叫rtkStore那就不能导入了
// 正确做法：使用content将store动态传入

function mockConnect(mapStateToProps, mapDispatchToProps) {
  // 高阶组件: 函数, 接受一个组件参数，返回一新组件
  return function (Component) {
    return class extends PureComponent {
      constructor() {
        super();
        this.state = mapStateToProps(store.getState());
      }

      componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
          this.setState(mapStateToProps(store.getState()));
        });
      }
      componentWillUnmount() {
        this.unSubscribe();
      }

      render() {
        const stateObj = mapStateToProps(store.getState());
        const dispatchObj = mapDispatchToProps(store.dispatch);
        return <Component {...stateObj} {...dispatchObj} />;
      }
    };
  };
}

export default mockConnect;
