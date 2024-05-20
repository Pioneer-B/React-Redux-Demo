import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
const { reducer } = require("./reducer.js");

// 正常情况下：dispatch派发的必须是一个对象 store.dispatch(object)
// 想要派发函数，必须加thunk中间件 store.dispatch(function)

// 默认情况下，redux-devtools工具没有开启，需要手动开启
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
