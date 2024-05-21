import React, { PureComponent } from "react";
import StoreContext from "./mockStoreContext";

// connect的参数:
// 参数一: 函数
// 参数二: 函数
// 返回值: 函数 => 高阶组件

// store 改为动态传入，<StoreContext.Provider value={store}> <App /> </StoreContext.Provider>

function mockConnect(mapStateToProps, mapDispatchToProps) {
  // 高阶组件: 函数, 接受一个组件参数，返回一新组件
  return function (Component) {
    class NewComponent extends PureComponent {
      constructor(props, content) {
        super(props);
        this.state = mapStateToProps(content.getState());
      }

      componentDidMount() {
        this.unSubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()));
        });
      }
      componentWillUnmount() {
        this.unSubscribe();
      }

      render() {
        const stateObj = mapStateToProps(this.context.getState());
        const dispatchObj = mapDispatchToProps(this.context.dispatch);
        return <Component {...stateObj} {...dispatchObj} />;
      }
    }

    NewComponent.contextType = StoreContext;
    return NewComponent;
  };
}

export default mockConnect;
