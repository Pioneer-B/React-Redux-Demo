import { createStore, applyMiddleware, compose } from "redux";
import { mockThunk, mockLog, mockApplyMiddleware } from "../middleware";
// import { thunk } from "redux-thunk";
const { reducer } = require("./reducer.js");

// 正常情况下：dispatch派发的必须是一个对象 store.dispatch(object)
// 想要派发函数，必须加thunk中间件 store.dispatch(function)

// 默认情况下，redux-devtools工具没有开启，需要手动开启
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
const store = createStore(reducer, composeEnhancers());

// 自定义applyMiddleware将多个 自定义中间件 应用到store
mockApplyMiddleware(store, mockLog, mockThunk);

export default store;
