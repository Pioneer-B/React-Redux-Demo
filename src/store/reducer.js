const { CHANGE_NAME, CHANGE_COUNTER } = require("./constants.js");

const initialState = {
  name: "why",
  counter: 100,
};

// 定义reducer函数: 纯函数
// 两个参数:
// 参数一: store中目前保存的state
// 参数二: 本次需要更新的action(dispatch传入的action)
// 返回值: 它的返回值会作为store之后存储的state
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case CHANGE_COUNTER:
      return { ...state, counter: state.counter + action.counter };
    default:
      return state;
  }
}

module.exports = {
  reducer,
};
